module Types::Queries
  module SourceQueries
    def self.included(klass)
      klass.field :remote_citation, String, null: true do
        description 'Check to see if a citation ID for a source not already in CIViC exists in an external database.'
        argument :citation_id, GraphQL::Types::Int, required: true
        #TODO - rename this or move to a module so its less silly of a typename
        argument :source_type, Types::SourceSourceType, required: true
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
    end
  end
end
