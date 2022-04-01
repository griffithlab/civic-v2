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

      klass.field :phenotype_typeahead, [Types::Entities::PhenotypeType], null: false do
        description "Retrieve phenotype typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :source_typeahead, [Types::Entities::SourceType], null: false do
        description 'Provide suggestions for sources based on a partial citation ID'
        argument :citation_id, GraphQL::Types::Int, required: true
        argument :source_type, Types::SourceSourceType, required: true
      end

      klass.field :variant_type_typeahead, [Types::Entities::VariantTypeType], null: false do
        description "Retrieve variant type typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :user_typeahead, [Types::Entities::UserType], null: false do
        description "Retrieve user type typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :entity_typeahead, [Types::Commentable::CommentTagSegment], null: false do
        description "Retrieve entity type typeahead fields for a entity mention search term."
        argument :query_term, GraphQL::Types::String, required: true
      end
      
      klass.field :acmg_codes_typeahead, [Types::Entities::AcmgCodeType], null: false do
        description "Retrieve ACMG Code options as a typeahead"
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :nccn_guidelines_typeahead, [Types::Entities::NccnGuidelineType], null: false do
        description "Retrieve NCCN Guideline options as a typeahead"
        argument :query_term, GraphQL::Types::String, required: true
      end

      def disease_typeahead(query_term:)
        results = Disease.where("diseases.name ILIKE ?", "%#{query_term}%")
          .order("LENGTH(diseases.name) ASC")
          .limit(10)
        if results.size < 10
          secondary_results = Disease.eager_load(:disease_aliases)
            .where("disease_aliases.name ILIKE ?", "%#{query_term}%")
            .order("LENGTH(diseases.name) ASC")
            .limit(10-results.size)
          return results + secondary_results
        else
          return results
        end
      end

      def drug_typeahead(query_term:)
        results = Drug.where("drugs.name ILIKE ?", "%#{query_term}%")
          .order("LENGTH(drugs.name) ASC")
          .limit(10)
        if results.size < 10
          secondary_results = Drug.eager_load(:drug_aliases)
            .where("drug_aliases.name ILIKE ?", "%#{query_term}%")
            .order("LENGTH(drugs.name) ASC")
            .limit(10-results.size)

          return results + secondary_results
        else
          return results
        end
      end

      def gene_typeahead(query_term:)
        results = Gene.where('genes.name ILIKE ?', "#{query_term}%")
          .order("LENGTH(genes.name) ASC")
          .limit(10)
        if results.size < 10
          secondary_results = Gene.eager_load(:gene_aliases)
            .where("gene_aliases.name ILIKE ?", "#{query_term}%")
            .order("LENGTH(genes.name) ASC")
            .limit(10 - results.size)
          return results + secondary_results
        else
          return results
        end
      end

      def phenotype_typeahead(query_term:)
        Phenotype.where('hpo_class ILIKE ?', "%#{query_term}%")
          .order('hpo_class')
          .limit(10)
      end

      def source_typeahead(citation_id:, source_type:)
        Source.where(source_type: source_type)
          .where('sources.citation_id LIKE ?', "#{citation_id}%")
          .limit(10)
      end

      def variant_type_typeahead(query_term:)
        VariantType.where('display_name ILIKE ?', "%#{query_term}%")
          .order('display_name')
          .limit(10)
      end

      def user_typeahead(query_term:)
        if query_term.blank?
          return []
        else
          User.where('username ILIKE ? OR name ILIKE ?', "#{query_term}%", "#{query_term}%")
            .order('username')
            .limit(10)
        end
      end

      def entity_typeahead(query_term:)
        Actions::ExtractReferences.typeahead_matches(query_term)
      end

      def acmg_codes_typeahead(query_term:)
        AcmgCode.where('code ILIKE ?', "#{query_term}%")
          .order(:code)
          .limit(20)
      end

      def nccn_guidelines_typeahead(query_term:)
        NccnGuideline.where('name ILIKE ?', "%#{query_term}%")
          .order(:name)
          .limit(20)
      end
    end
  end
end
