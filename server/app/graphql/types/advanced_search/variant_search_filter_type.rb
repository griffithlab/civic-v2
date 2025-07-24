module Types
    module AdvancedSearch
        class VariantSearchFilterType < Types::BaseInputObject
            argument :sub_filters, [ Types::AdvancedSearch::VariantSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :comments, Types::AdvancedSearch::CommentSearchFilterType, required: false
            argument :deprecated, Types::AdvancedSearch::BooleanSearchInput, required: false
            # argument :deprecation_activity, Types::AdvancedSearch::DeprecateVariantActivitySearchFilterType, required: false
            argument :deprecation_reason, Types::AdvancedSearch::EnumSearchInput.for(Types::VariantDeprecationReasonType), required: false
            # argument :events, Types::AdvancedSearch::EventConnectionSearchFilterType, required: false
            argument :feature, Types::AdvancedSearch::FeatureSearchFilterType, required: false
            argument :flagged, Types::AdvancedSearch::BooleanSearchInput, required: false
            # argument :flags, Types::AdvancedSearch::FlagConnectionSearchFilterType, required: false # If people want to search for flag connection,
            # Uncomment it out and the items given within it are: pageCount, pageInfo {endCursor, hasNextPage, hasPreviousPage, startCursor}, totalCount, unfilteredCountForSubject
            argument :id, Types::AdvancedSearch::IntSearchInput, required: false
            # argument :last_comment_event, Types::AdvancedSearch::EventSearchFilterType, required: false
            # If people want to search by comment events, uncomment this and implement the EventSearchFilterType class
            # argument :last_submitted_revision_event, Types::AdvancedSearch::EventSearchFilterType, required: false
            # If people want to search by revision events, uncomment this and implement the EventSearchFilterType class
            argument :molecular_profile, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: false
            argument :name, Types::AdvancedSearch::StringSearchInput, required: false
            argument :open_revision_count, Types::AdvancedSearch::IntSearchInput, required: false
            # argument :revisions, Types::AdvancedSearch::RevisionConnectionSearchFilterType, required: false
            # If people want to search by revision events, uncomment this and implement the RevisionSearchFilterType class
            argument :single_variant_molecular_profile, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: false
            argument :variant_alias, Types::AdvancedSearch::StringSearchInput, required: false
            argument :variant_type, Types::AdvancedSearch::VariantTypeSearchFilterType, required: false
        end
    end
end