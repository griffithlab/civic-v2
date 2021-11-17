module Types::Queries
  module TypeaheadQueries
    def self.included(klass)
      klass.field :disease_typeahead, [Types::Entities::DiseaseType], null: false do
        description "Retrieve disease typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :drug_typeahead, [Types::Entities::DrugType], null: false do
        description "Retrieve drug typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :gene_typeahead, [Types::Entities::GeneType], null: false do
        description "Retrieve gene typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :phenotype_typeahead, Types::Entities::PhenotypeType, null: false do
        description "Retrieve phenotype typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :source_typeahead, [Types::Entities::SourceType], null: false do
        description 'Provide suggestions for sources based on a partial citation ID'
        argument :citation_id, GraphQL::Types::Int, required: true
        argument :source_type, Types::SourceSourceType, required: true
      end


      klass.field :variant_type_typeahead, Types::Entities::VariantTypeType, null: false do
        description "Retrieve variant type typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end


      def disease_typeahead(query_term:)
        scope = Disease.eager_load(:disease_aliases)
        scope.where("diseases.name ILIKE ?", "%#{query_term}%")
          .or(scope.where("disease_aliases.name ILIKE ?", "%#{query_term}%"))
          .order("diseases.name")
          .limit(10)
      end

      def drug_typeahead(query_term:)
        scope = Drug.eager_load(:drug_aliases)
        scope.where("drugs.name ILIKE ?", "%#{query_term}%")
          .or(scope.where("drug_aliases.name ILIKE ?", "%#{query_term}%"))
          .order("drugs.name")
          .limit(10)
      end

      def gene_typeahead(query_term:)
        #Gene.first(10)
        scope = Gene.eager_load(:gene_aliases)
        scope.where("genes.name ILIKE ?", "#{query_term}%")
          .or(scope.where("gene_aliases.name ILIKE ?", "#{query_term}%"))
          .order("genes.name")
          .limit(10)
      end

      def phenotype_typeahead(query_term:)
        Phenotype.find(query_term)
      end

      def source_typeahead(citation_id:, source_type:)
        Source.where(source_type: source_type)
          .where('sources.citation_id LIKE ?', "#{citation_id}%")
          .limit(10)
      end

      def variant_type_typeahead(query_term:)
        VariantType.find(query_term)
      end
    end
  end
end
