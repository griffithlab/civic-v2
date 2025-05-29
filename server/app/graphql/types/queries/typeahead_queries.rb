module Types::Queries
  module TypeaheadQueries
    def self.included(klass)
      klass.field :disease_typeahead, [ Types::Entities::DiseaseType ], null: false do
        description "Retrieve disease typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :therapy_typeahead, [ Types::Entities::TherapyType ], null: false do
        description "Retrieve therapy typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :feature_typeahead, [ Types::Entities::FeatureType ], null: false do
        description "Retrieve Features of a specific instance type for a search term."
        argument :query_term, GraphQL::Types::String, required: true
        argument :feature_type, Types::FeatureInstanceTypes, required: false
      end

      klass.field :phenotype_typeahead, [ Types::Entities::PhenotypeType ], null: false do
        description "Retrieve phenotype typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :source_typeahead, [ Types::Entities::SourceType ], null: false do
        description "Provide suggestions for sources based on a partial citation ID"
        argument :citation_id, GraphQL::Types::String, required: true
        argument :source_type, Types::SourceSourceType, required: true
      end

      klass.field :variant_type_typeahead, [ Types::Entities::VariantTypeType ], null: false do
        description "Retrieve variant type typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :user_typeahead, [ Types::Entities::UserType ], null: false do
        description "Retrieve user type typeahead fields for a search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :entity_typeahead, [ Types::Commentable::CommentTagSegment ], null: false do
        description "Retrieve entity type typeahead fields for a entity mention search term."
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :acmg_codes_typeahead, [ Types::Entities::AcmgCodeType ], null: false do
        description "Retrieve ACMG Code options as a typeahead"
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :clingen_codes_typeahead, [ Types::Entities::ClingenCodeType ], null: false do
        description "Retrieve Clingen Code options as a typeahead"
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :nccn_guidelines_typeahead, [ Types::Entities::NccnGuidelineType ], null: false do
        description "Retrieve NCCN Guideline options as a typeahead"
        argument :query_term, GraphQL::Types::String, required: true
      end

      klass.field :variants_typeahead, [ Types::Interfaces::VariantInterface ], null: false do
        argument :query_term, GraphQL::Types::String, required: true
        argument :feature_id, GraphQL::Types::Int, required: false
      end

      def variants_typeahead(query_term:, feature_id: nil)
        scope = Variant.left_joins(:variant_aliases)
          .where(deprecated: false)
          .where("variants.name ILIKE :query OR variant_aliases.name ILIKE :query", { query: "%#{query_term}%" })
          .limit(20)
          .distinct

        if feature_id
          scope.where(feature_id: feature_id)
        else
          scope
        end
      end

      def disease_typeahead(query_term:)
        base_query = Disease.where(deprecated: false)
        results = base_query.where("diseases.name ILIKE ?", "%#{query_term}%")
          .or(base_query.where("diseases.doid ILIKE ?", "#{query_term.gsub(/DOID:/i, "")}%"))
          .order("LENGTH(diseases.name) ASC")
          .limit(10)
        if results.size < 10
          secondary_results = base_query.eager_load(:disease_aliases)
            .where("disease_aliases.name ILIKE ?", "%#{query_term}%")
            .where.not(id: results.select("id"))
            .distinct
            .limit(10-results.size)
          return results + secondary_results
        else
          return results
        end
      end

      def therapy_typeahead(query_term:)
        base_query = Therapy.where(deprecated: false)
        results = base_query.where("therapies.name ILIKE ?", "#{query_term}%")
          .or(base_query.where("therapies.ncit_id ILIKE ?", "%#{query_term}%"))
          .order("LENGTH(therapies.name) ASC")
          .limit(10)
        if results.size < 10
          secondary_results = base_query.where("therapies.name ILIKE ?", "%#{query_term}%")
            .where.not(id: results.select("id"))

          if results.size + secondary_results.size < 10
            tertiary_results = base_query.eager_load(:therapy_aliases)
              .where("therapy_aliases.name ILIKE ?", "%#{query_term}%")
              .where.not(id: results.select("id") + secondary_results.select("id"))
              .distinct
              .limit(10-results.size)

            return results + secondary_results + tertiary_results
          else
            return results + secondary_results
          end
        else
          return results
        end
      end

      def feature_typeahead(query_term:, feature_type: nil)
        base_query = if feature_type
                       Feature.where(feature_instance_type: feature_type)
        else
                      Feature
        end

        results = base_query.where("features.name ILIKE ?", "#{query_term}%")
          .order("LENGTH(features.name) ASC")
          .limit(10)

        if results.size < 10
          secondary_results = base_query.eager_load(:feature_aliases)
            .where("feature_aliases.name ILIKE ?", "#{query_term}%")
            .where.not(id: results.select("id"))
            .distinct
            .limit(10 - results.size)
          return (results + secondary_results).uniq
        else
          return results
        end
      end

      def phenotype_typeahead(query_term:)
        Phenotype.where("hpo_class ILIKE ?", "%#{query_term}%")
          .or(Phenotype.where("hpo_id ILIKE ?", "%#{query_term}%"))
          .order("hpo_class")
          .limit(10)
      end

      def source_typeahead(citation_id:, source_type:)
        Source.where(source_type: source_type)
          .where("sources.citation_id LIKE ?", "#{citation_id}")
          .limit(10)
      end

      def variant_type_typeahead(query_term:)
        VariantType.where("display_name ILIKE ?", "%#{query_term}%")
          .order("display_name")
          .limit(10)
      end

      def user_typeahead(query_term:)
        if query_term.blank?
          return []
        else
          User.where("username ILIKE ? OR name ILIKE ?", "#{query_term}%", "#{query_term}%")
            .order("username")
            .limit(10)
        end
      end

      def entity_typeahead(query_term:)
        Actions::ExtractReferences.typeahead_matches(query_term)
      end

      def acmg_codes_typeahead(query_term:)
        AcmgCode.where("code ILIKE ?", "#{query_term}%")
          .order(:code)
          .limit(20)
      end

      def clingen_codes_typeahead(query_term:)
        ClingenCode.where("code ILIKE ?", "#{query_term}%")
          .or(ClingenCode.where("description ILIKE ?", "%#{query_term}%"))
          .order(:code)
          .limit(20)
      end

      def nccn_guidelines_typeahead(query_term:)
        NccnGuideline.where("name ILIKE ?", "%#{query_term}%")
          .order(:name)
          .limit(20)
      end
    end
  end
end
