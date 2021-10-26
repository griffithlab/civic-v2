module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    include Types::Queries::UserQueries
    include Types::Queries::EvidenceItemQueries
    include Types::Queries::SourceQueries

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :browseGenes, resolver: Resolvers::BrowseGenes
    field :browseVariants, resolver: Resolvers::BrowseVariants
    field :browseSources, resolver: Resolvers::BrowseSources
    field :browseVariantGroups, resolver: Resolvers::BrowseVariantGroups
    field :browseDiseases, resolver: Resolvers::BrowseDiseases
    field :events, resolver: Resolvers::TopLevelEvents
    field :phenotypes, resolver: Resolvers::Phenotypes
    field :source_suggestions, resolver: Resolvers::BrowseSourceSuggestions
    field :notifications, resolver: Resolvers::Notifications do
      def authorized?(object, args, context)
        context[:current_user].present?
      end
    end

    field :contributors, resolver: Resolvers::Contributors

    field :search, resolver: Resolvers::Quicksearch

    field :disease, Types::Entities::DiseaseType, null: true do
      description "Find a disease by CIViC ID"
      argument :id, Int, required: true
    end

    field :drug, Types::Entities::DrugType, null: true do
      description "Find a drug by CIViC ID"
      argument :id, Int, required: true
    end

    field :gene, Types::Entities::GeneType, null: true do
      description "Find a gene by CIViC ID"
      argument :id, Int, required: true
    end

    field :variant, Types::Entities::VariantType, null: true do
      description "Find a variant by CIViC ID"
      argument :id, Int, required: true
    end

    field :variant_group, Types::Entities::VariantGroupType, null: true do
      description "Find a variant group by CIViC ID"
      argument :id, Int, required: true
    end
    
    field :assertion, Types::Entities::AssertionType, null: true do
      description "Find an assertion by CIViC ID"
      argument :id, Int, required: true
    end

    field :source, Types::Entities::SourceType, null: true do
      description "Find a source by CIViC ID"
      argument :id, Int, required: true
    end

    field :organization, Types::Entities::OrganizationType, null: true do
      description 'Find an organization by CIViC ID'
      argument :id, Int, required: true
    end

    field :phenotype, Types::Entities::PhenotypeType, null: true do
      description 'Find a phenotype by CIViC ID'
      argument :id, Int, required: true
    end

    field :variant_type, Types::Entities::VariantTypeType, null: true do
      description 'Find a variant type by CIViC ID'
      argument :id, Int, required: true
    end

    field :clinical_trial, Types::Entities::ClinicalTrialType, null: true do
      description 'Find a clinical trial by CIViC ID'
      argument :id, Int, required: true
    end

    field :flag, Types::Entities::FlagType, null: true do
      description 'Find a flag by CIViC ID'
      argument :id, Int, required: true
    end

    field :comment, Types::Entities::CommentType, null: true do
      description 'Find a comment by CIViC ID'
      argument :id, Int, required: true
    end

    field :revision, Types::Revisions::RevisionType, null: true do
      description 'Find a revision by CIViC ID'
      argument :id, Int, required: true
    end

    field :search_genes, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
      argument :query, Types::AdvancedSearch::GeneSearchFilterType, required: true
      argument :create_permalink, Boolean, required: false, default_value: false
    end

    field :search_by_permalink, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
      argument :permalink_id, String, required: true
    end

    field :comments, resolver: Resolvers::TopLevelComments

    field :variants, resolver: Resolvers::TopLevelVariants, max_page_size: 40

    field :evidence_items, resolver: Resolvers::TopLevelEvidenceItems
    field :assertions, resolver: Resolvers::TopLevelAssertions

    field :flags, resolver: Resolvers::TopLevelFlags

    field :users, resolver: Resolvers::TopLevelUsers

    field :organizations, resolver: Resolvers::TopLevelOrganizations

    field :variant_types, resolver: Resolvers::TopLevelVariantTypes

    field :drugs, resolver: Resolvers::TopLevelDrugs

    field :clinical_trials, resolver: Resolvers::TopLevelClinicalTrials

    def disease(id: )
      Disease.find_by(id: id)
    end

    def drug(id: )
      Drug.find_by(id: id)
    end

    def gene(id: )
      Gene.find_by(id: id)
    end

    def variant(id: )
      Variant.find_by(id: id)
    end

    def variant_group(id: )
      VariantGroup.find_by(id: id)
    end

    def assertion(id: )
      Assertion.find_by(id: id)
    end

    def source(id: )
      Source.find_by(id: id)
    end

    def organization(id: )
      Organization.find_by(id: id)
    end

    def phenotype(id: )
      Phenotype.find_by(id: id)
    end

    def variant_type(id: )
      VariantType.find_by(id: id)
    end

    def clinical_trial(id: )
      ClinicalTrial.find_by(id: id)
    end

    def flag(id: )
      Flag.find_by(id: id)
    end

    def comment(id: )
      Comment.find_by(id: id)
    end

    def revision(id: )
      Revision.find_by(id: id)
    end

    def search_genes(query:, create_permalink:)
      permalink = if create_permalink
                    ::AdvancedSearch.where(
                      params: context.query.query_string,
                      search_type: 'searchGenes'
                    ).first_or_create
                      .token
                  else
                    nil
                  end

      {
        result_ids: ::AdvancedSearches::Gene.new(query: query).results,
        permalink_id: permalink,
        search_endpoint: 'searchGenes'
      }
    end

    def search_by_permalink(permalink_id:)
      saved_search = ::AdvancedSearch.find_by(token: permalink_id)

      if saved_search.nil?
        raise GraphQL::ExecutionError.new("Saved search with id #{permalink_id} not found.")
      end

      result = Civic2Schema.execute(saved_search.params, context: context)
      formatted_hash = result.to_h.dig('data', saved_search.search_type)
      {
        permalink_id: formatted_hash['permalinkId'],
        result_ids: formatted_hash['resultIds'],
        search_endpoint: saved_search.search_type
      }
    end
  end
end
