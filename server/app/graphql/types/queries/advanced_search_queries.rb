module Types::Queries
  module AdvancedSearchQueries
    def self.included(klass)
      klass.field :search_features, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::FeatureSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_molecular_profiles, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_sources, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::SourceSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_diseases, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::DiseaseSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_evidence_items, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::EvidenceItemSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_assertions, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::AssertionSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_phenotypes, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::PhenotypeSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_therapies, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::TherapySearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_variants, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::VariantSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_variant_types, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::VariantTypeSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_users, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :query, Types::AdvancedSearch::UserSearchFilterType, required: true
        argument :create_permalink, GraphQL::Types::Boolean, required: false, default_value: false
      end

      klass.field :search_by_permalink, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
        argument :permalink_id, String, required: true
      end

      def search_features(query:, create_permalink:)
        handle_search("searchFeatures", AdvancedSearches::Feature, create_permalink, query)
      end

      def search_molecular_profiles(query:, create_permalink:)
        handle_search("searchMolecularProfiles", AdvancedSearches::MolecularProfile, create_permalink, query)
      end

      def search_evidence_items(query:, create_permalink:)
        handle_search("searchEvidenceItems", AdvancedSearches::EvidenceItem, create_permalink, query)
      end

      def search_assertions(query:, create_permalink:)
        handle_search("searchAssertions", AdvancedSearches::Assertion, create_permalink, query)
      end

      def search_sources(query:, create_permalink:)
        handle_search("searchSources", AdvancedSearches::Source, create_permalink, query)
      end

      def search_diseases(query:, create_permalink:)
        handle_search("searchDiseases", AdvancedSearches::Disease, create_permalink, query)
      end


      def search_phenotypes(query:, create_permalink:)
        handle_search("searchPhenotypes", AdvancedSearches::Phenotype, create_permalink, query)
      end

      def search_therapies(query:, create_permalink:)
        handle_search("searchTherapies", AdvancedSearches::Therapy, create_permalink, query)
      end

      def search_variants(query:, create_permalink:)
        handle_search("searchVariants", AdvancedSearches::Variant, create_permalink, query)
      end

      def search_variant_types(query:, create_permalink:)
        handle_search("searchVariantTypes", AdvancedSearches::VariantType, create_permalink, query)
      end

      def search_users(query:, create_permalink:)
        handle_search("searchUsers", AdvancedSearches::User, create_permalink, query)
      end

      def search_by_permalink(permalink_id:)
        saved_search = ::AdvancedSearch.find_by(token: permalink_id)

        if saved_search.nil?
          raise GraphQL::ExecutionError.new("Saved search with id #{permalink_id} not found.")
        end

        result = Civic2Schema.execute(saved_search.params, context: context)
        formatted_hash = result.to_h.dig("data", saved_search.search_type)
        {
          permalink_id: formatted_hash["permalinkId"],
          result_ids: formatted_hash["resultIds"],
          search_endpoint: saved_search.search_type,
          original_query: formatted_hash["originalQuery"],
        }
      end

      def handle_search(search_type, search_class, create_permalink, query)
        permalink = handle_permalink(search_type, create_permalink)
        {
          result_ids: search_class.new(query: query).results,
          permalink_id: permalink,
          search_endpoint: search_type,
          original_query: query.to_h,
        }
      end

      def handle_permalink(search_type, create_permalink)
        if create_permalink
          AdvancedSearch
            .where(params: context.query.query_string, search_type: search_type)
            .first_or_create!
            .token
        else
          nil
        end
      end
    end
  end
end
