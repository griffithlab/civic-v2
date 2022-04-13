module Types::Queries
  module SourceQueries
    def self.included(klass)
      klass.field :remote_citation, String, null: true do
        description 'Check to see if a citation ID for a source not already in CIViC exists in an external database.'
        argument :citation_id, GraphQL::Types::Int, required: true
        #TODO - rename this or move to a module so its less silly of a typename
        argument :source_type, Types::SourceSourceType, required: true
      end

      klass.field :source_suggestion_values, Types::SourceSuggestionValuesType, null: false do
        description 'Given the parameters in a source suggestion, fetch the values to populate the add evidence form'
        argument :gene_id, GraphQL::Types::Int, required: false
        argument :variant_id, GraphQL::Types::Int, required: false
        argument :disease_id, GraphQL::Types::Int, required: false
        argument :source_id, GraphQL::Types::Int, required: false
      end

      def remote_citation(citation_id:, source_type:)
        citation = case source_type
        when 'ASCO'
          Scrapers::Asco.get_citation_from_asco_id(citation_id)
        when 'PubMed'
          Scrapers::PubMed.get_citation_from_pubmed_id(citation_id)
        else
          raise GraphQL::ExecutionError, "#{source_type} not found for existence check, non-exhaustive match"
        end

        if citation.present?
          citation
        else
          nil
        end
      end

      def source_suggestion_values(gene_id: nil, variant_id: nil, disease_id: nil, source_id: nil)
        {
          gene: gene_id.present? ? gene(id: gene_id) : nil,
          variant: variant_id.present? ? variant(id: variant_id) : nil,
          disease: disease_id.present? ? disease(id: disease_id) : nil,
          source: source_id.present? ? source(id: source_id) : nil,
        }
      end
    end
  end
end
