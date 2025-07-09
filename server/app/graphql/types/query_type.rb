module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    include Types::Queries::UserQueries
    include Types::Queries::EvidenceItemQueries
    include Types::Queries::SourceQueries
    include Types::Queries::PopoverQueries
    include Types::Queries::TypeaheadQueries
    include Types::Queries::DataReleaseQuery
    include Types::Queries::LeaderboardQueries

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :browseFeatures, resolver: Resolvers::BrowseFeatures
    field :browseVariants, resolver: Resolvers::BrowseVariants
    field :browseSources, resolver: Resolvers::BrowseSources
    field :browseVariantGroups, resolver: Resolvers::BrowseVariantGroups
    field :browseDiseases, resolver: Resolvers::BrowseDiseases
    field :browseTherapies, resolver: Resolvers::BrowseTherapies
    field :browsePhenotypes, resolver: Resolvers::BrowsePhenotypes
    field :browseMolecularProfiles, resolver: Resolvers::BrowseMolecularProfiles
    field :browseOrganizations, resolver: Resolvers::BrowseOrganizations
    field :events, resolver: Resolvers::TopLevelEvents
    field :comments, resolver: Resolvers::TopLevelComments
    field :source_suggestions, resolver: Resolvers::BrowseSourceSuggestions
    field :notifications, resolver: Resolvers::Notifications do
      def authorized?(object, args, context)
        context[:current_user].present?
      end
    end

    field :subscription_for_entity, Types::Subscribable::SubscriptionType, null: true do
      description "Get the active subscription for the entity and logged in user, if any"
      argument :subscribable,  Types::Subscribable::SubscribableInput, required: true
      def authorized?(object, args, context)
        context[:current_user].present?
      end
    end

    field :contributors, resolver: Resolvers::Contributors

    unless Rails.env.headless?
      field :search, resolver: Resolvers::Quicksearch
    end

    field :disease, Types::Entities::DiseaseType, null: true do
      description "Find a disease by CIViC ID"
      argument :id, Int, required: true
    end

    field :therapy, Types::Entities::TherapyType, null: true do
      description "Find a therapy by CIViC ID"
      argument :id, Int, required: true
    end

    field :gene, Types::Entities::GeneType, null: true do
      description "Find a single gene by CIViC ID or Entrez symbol"
      argument :id, Int, required: false
      argument :entrez_symbol, String, required: false
    end

    field :factor, Types::Entities::FactorType, null: true do
      description "Find a single gene by CIViC ID or NCIt ID"
      argument :id, Int, required: false
      argument :ncit_id, String, required: false
    end

    field :fusion, Types::Entities::FusionType, null: true do
      description "Find a single gene by CIViC ID"
      argument :id, Int, required: false
    end

    field :feature, Types::Entities::FeatureType, null: true do
      description "Find a single feature by CIViC ID"
      argument :id, Int, required: false
    end

    field :variant, Types::Interfaces::VariantInterface, null: true do
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

    field :molecular_profile, Types::Entities::MolecularProfileType, null: true do
      description "Find a molecular profile by CIViC ID"
      argument :id, Int, required: true
    end

    field :source, Types::Entities::SourceType, null: true do
      description "Find a source by CIViC ID"
      argument :id, Int, required: true
    end

    field :organization, Types::Entities::OrganizationType, null: true do
      description "Find an organization by CIViC ID"
      argument :id, Int, required: true
    end

    field :phenotype, Types::Entities::PhenotypeType, null: true do
      description "Find a phenotype by CIViC ID"
      argument :id, Int, required: true
    end

    field :variant_type, Types::Entities::VariantTypeType, null: true do
      description "Find a variant type by CIViC ID"
      argument :id, Int, required: true
    end

    field :clinical_trial, Types::Entities::ClinicalTrialType, null: true do
      description "Find a clinical trial by CIViC ID"
      argument :id, Int, required: true
    end

    field :flag, Types::Entities::FlagType, null: true do
      description "Find a flag by CIViC ID"
      argument :id, Int, required: true
    end

    field :comment, Types::Entities::CommentType, null: true do
      description "Find a comment by CIViC ID"
      argument :id, Int, required: true
    end

    field :revision, Types::Revisions::RevisionType, null: true do
      description "Find a revision by CIViC ID"
      argument :id, Int, required: true
    end

    field :acmg_code, Types::Entities::AcmgCodeType, null: true do
      description "Find an ACMG code by CIViC ID"
      argument :id, Int, required: true
    end

    field :clingen_code, Types::Entities::ClingenCodeType, null: true do
      description "Find a ClinGen code by CIViC ID"
      argument :id, Int, required: true
    end

    field :nccn_guideline, Types::Entities::NccnGuidelineType, null: true do
      description "Find a NCCN Guideline by CIViC ID"
      argument :id, Int, required: true
    end

    field :countries, [ Types::Entities::CountryType ], null: false do
      description "Fetch a list of countries for user profiles."
    end

    field :activity, Types::Interfaces::ActivityInterface, null: true do
      description "Find a CIViC activity record by CIViC ID"
      argument :id, Int, required: true
    end

    field :revisions, resolver: Resolvers::TopLevelRevisions
    field :validate_revisions_for_acceptance, resolver: Resolvers::ValidateRevisionsForAcceptance

    field :search_features, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
      argument :query, Types::AdvancedSearch::FeatureSearchFilterType, required: true
      argument :create_permalink, Boolean, required: false, default_value: false
    end

    field :search_by_permalink, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
      argument :permalink_id, String, required: true
    end

    field :preview_comment_text, [ Types::Commentable::CommentBodySegment ], null: false do
      argument :comment_text, String, required: true
    end

    field :preview_molecular_profile_name, Types::MolecularProfile::MolecularProfileNamePreviewType, null: false do
      argument :structure, Types::MolecularProfile::MolecularProfileComponentInput, required: false,
        validates: { Types::MolecularProfile::MolecularProfileComponentValidator => {} }
    end

    field :genes, resolver: Resolvers::TopLevelGenes
    field :fusions, resolver: Resolvers::TopLevelFusions
    field :factors, resolver: Resolvers::TopLevelFactors
    field :variants, resolver: Resolvers::TopLevelVariants, max_page_size: 300
    field :variant_groups, resolver: Resolvers::TopLevelVariantGroups
    field :evidence_items, resolver: Resolvers::TopLevelEvidenceItems
    field :assertions, resolver: Resolvers::TopLevelAssertions
    field :molecular_profiles, resolver: Resolvers::TopLevelMolecularProfiles, max_page_size: 300
    field :sources, resolver: Resolvers::TopLevelSources

    field :flags, resolver: Resolvers::TopLevelFlags

    field :users, resolver: Resolvers::TopLevelUsers

    field :organizations, resolver: Resolvers::TopLevelOrganizations

    field :variant_types, resolver: Resolvers::TopLevelVariantTypes

    field :diseases, resolver: Resolvers::TopLevelDiseases

    field :therapies, resolver: Resolvers::TopLevelTherapies

    field :phenotypes, resolver: Resolvers::TopLevelPhenotypes

    field :clinical_trials, resolver: Resolvers::TopLevelClinicalTrials

    field :timepoint_stats, Types::CivicTimepointStats, null: false

    field :activities, resolver: Resolvers::Activities

    field :endorsements, resolver: Resolvers::TopLevelEndorsements

    def molecular_profile(id:)
      ::MolecularProfile.find_by(id: id)
    end

    def disease(id:)
      Disease.find_by(id: id)
    end

    def therapy(id:)
      Therapy.find_by(id: id)
    end

    def gene(id: :unspecified, entrez_symbol: :unspecified)
      if (id == :unspecified && entrez_symbol == :unspecified) || (id != :unspecified && entrez_symbol != :unspecified)
        raise GraphQL::ExecutionError.new("Must specify exactly one of id or entrezSymbol")
      end
      if id != :unspecified
        Feature.find_by(feature_instance_type: "Features::Gene", id: id)&.feature_instance
      else
        Features::Gene.find_by(name: entrez_symbol)
      end
    end

    def factor(id: :unspecified, ncit_id: :unspecified)
      if (id == :unspecified && ncit_id == :unspecified) || (id != :unspecified && ncit_id != :unspecified)
        raise GraphQL::ExecutionError.new("Must specify exactly one of id or ncitId")
      end
      if id != :unspecified
        Feature.find_by(feature_instance_type: "Features::Factor", id: id)&.feature_instance
      else
        Features::Factor.find_by(ncit_id: ncit_id)
      end
    end

    def fusion(id:)
      Feature.find_by(feature_instance_type: "Features::Fusion", id: id)&.feature_instance
    end

    def feature(id:)
      Feature.find_by(id: id)
    end

    def variant(id:)
      Variant.find_by(id: id)
    end

    def variant_group(id:)
      VariantGroup.find_by(id: id)
    end

    def assertion(id:)
      Assertion.find_by(id: id)
    end

    def source(id:)
      Source.find_by(id: id)
    end

    def organization(id:)
      Organization.find_by(id: id)
    end

    def phenotype(id:)
      Phenotype.find_by(id: id)
    end

    def variant_type(id:)
      VariantType.find_by(id: id)
    end

    def clinical_trial(id:)
      ClinicalTrial.find_by(id: id)
    end

    def flag(id:)
      Flag.find_by(id: id)
    end

    def comment(id:)
      Comment.find_by(id: id)
    end

    def revision(id:)
      Revision.find_by(id: id)
    end

    def activity(id:)
      Activity.find_by(id: id)
    end

    def subscription_for_entity(subscribable:)
      if subscribable
        Subscription.find_by(
          user: context[:current_user],
          subscribable: subscribable
        )
      else
        nil
      end
    end

    def search_features(query:, create_permalink:)
      permalink = if create_permalink
                    ::AdvancedSearch.where(
                      params: context.query.query_string,
                      search_type: "searchFeatures"
                    ).first_or_create
                      .token
      else
                    nil
      end
      result_ids = ::AdvancedSearches::Feature.new(query: query).results
      {
        result_ids: result_ids,
        results: ::Feature.where(id: result_ids),
        permalink_id: permalink,
        search_endpoint: "searchFeatures",
      }
    end

    def search_by_permalink(permalink_id:)
      saved_search = ::AdvancedSearch.find_by(token: permalink_id)

      if saved_search.nil?
        raise GraphQL::ExecutionError.new("Saved search with id #{permalink_id} not found.")
      end

      result = Civic2Schema.execute(saved_search.params, context: context)
      formatted_hash = result.to_h.dig("data", saved_search.search_type)

      # Extract the entity type from the search endpoint
      # e.g., "searchFeatures" -> "Feature", "searchVariants" -> "Variant"
      entity_type = saved_search.search_type.sub(/^search/, '')

      # Convert to singular if needed (e.g., "Features" -> "Feature")
      entity_type = entity_type.singularize

      # Find the corresponding model class
      begin
        entity_class = entity_type.constantize
      rescue NameError
        # If the class doesn't exist directly, try with :: prefix
        begin
          entity_class = "::#{entity_type}".constantize
        rescue NameError
          # If we still can't find the class, default to Feature for backward compatibility
          entity_class = ::Feature
        end
      end

      # Get the result IDs from the formatted hash
      result_ids = formatted_hash["resultIds"]

      # Return the response with both result_ids and the actual entity objects
      {
        permalink_id: formatted_hash["permalinkId"],
        result_ids: result_ids,
        results: entity_class.where(id: result_ids),
        search_endpoint: saved_search.search_type,
      }
    end

    def preview_comment_text(comment_text:)
      Actions::FormatCommentText.get_segments(text: comment_text)
    end

    def preview_molecular_profile_name(structure: nil)
      if structure.nil?
        return {
          segments: [],
          existing_molecular_profile: nil,
          deprecated_variants: [],
        }
      end

      variant_ids = structure.variant_ids.uniq
      deprecated_variants = Variant.where(id: variant_ids, deprecated: true)
      if deprecated_variants.exists?
        return {
          segments: [],
          existing_molecular_profile: nil,
          deprecated_variants: deprecated_variants,
        }
      else
        variants = Variant.where(id: variant_ids)

        if variants.size !=  variant_ids.size
          missing = variant_ids - variants.map(&:id)
          raise GraphQL::ExecutionError, "Variants with ID [#{missing.join(', ')}] were not found."
        end

        name = Actions::GenerateMolecularProfileName.generate_name(structure: structure)

        return {
          segments: ::MolecularProfile.new(name: name).segments,
          existing_molecular_profile: ::MolecularProfile.find_by(name: name),
          deprecated_variants: [],
        }
      end
    end

    def acmg_code(id:)
      AcmgCode.find(id)
    end

    def clingen_code(id:)
      ClingenCode.find(id)
    end

    def nccn_guideline(id:)
      NccnGuideline.find(id)
    end

    def countries
      Country.all
    end

    def timepoint_stats
      Rails.cache.fetch("homepage_timepoint_stats", expires_in: 10.minutes) do
        CivicStats.homepage_stats
      end
    end
  end
end
