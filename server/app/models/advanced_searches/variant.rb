module AdvancedSearches
  class Variant < AdvancedSearches::Base
    def base_query
      ::Variant.left_outer_joins(:variant_aliases)
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_flagged_filter(node),
        resolve_deprecated_filter(node),
        # resolve_deprecation_reason_filter(node), #Error invalid input syntax for type integer, is there a way to convert the enum back into an int?
        resolve_variant_alias_filter(node),
        # resolve_open_revision_count_filter(node), # Needs some fixing to work properly
        # resolve_comment_filter(node), # Something is wrong here currently, sql error Invalid column reference
        # resolve_deprecation_activity_filter(node),
        resolve_feature_filter(node),
        resolve_molecular_profile_filter(node),
        resolve_single_variant_molecular_profile_filter(node),
        resolve_variant_type_filter(node),
        # resolve_last_comment_event_filter(node),
        # resolve_last_submitted_revision_event_filter(node),
        # resolve_events_filter(node),
        # resolve_flags_filter(node),
        # resolve_revisions_filter(node)
      ]
    end

    def resolve_id_filter(node)
      return nil if node.id.nil?
      clause, value = node.id.resolve_query_for_type("variants.id")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      return nil if node.name.nil?
      clause, value = node.name.resolve_query_for_type("variants.name")
      base_query.where(clause, value)
    end

    def resolve_flagged_filter(node)
      return nil if node.flagged.nil?
      clause, value = node.flagged.resolve_query_for_type("variants.flagged")
      base_query.where(clause, value)
    end

    def resolve_deprecated_filter(node)
      return nil if node.deprecated.nil?
      clause, value = node.deprecated.resolve_query_for_type("variants.deprecated")
      base_query.where(clause, value)
    end

    def resolve_deprecation_reason_filter(node)
      return nil if node.deprecation_reason.nil?
      clause, value = node.deprecation_reason.resolve_query_for_type("variants.deprecation_reason")
      base_query.where(clause, value)
    end

    def resolve_variant_alias_filter(node)
      return nil if node.variant_alias.nil?
      clause, value = node.variant_alias.resolve_query_for_type("variant_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_open_revision_count_filter(node)
      return nil if node.open_revision_count.nil?
      (clause, value) = node.open_revision_count.resolve_query_for_type("count(variants.revision)")

      matching_ids = ::Variant.joins(:open_revisions)
        .where("status = 'new'")
        .group("revision.id")
        .having(clause, value)
        .distinct
        .pluck("variants.id")

      base_query.where(id: matching_ids)
    end

    def resolve_comment_filter(node)
      return nil if node.comment.nil?
      comment_ids = ::AdvancedSearches::Comment.new(query: node.comment).results
      variant_ids = ::Variant.joins(:comments).where(comments: { id: comment_ids }).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_deprecation_activity_filter(node)
      return nil if node.deprecation_activity.nil?
      activity_ids = ::AdvancedSearches::DeprecateVariantActivity.new(query: node.deprecation_activity).results
      variant_ids = ::Variant.joins(:deprecation_activity).where(activities: { id: activity_ids }).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_feature_filter(node)
      return nil if node.feature.nil?
      feature_ids = ::AdvancedSearches::Feature.new(query: node.feature).results
      variant_ids = ::Variant.joins(:feature).where(feature: {id: feature_ids}).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_molecular_profile_filter(node)
      return nil if node.molecular_profile.nil?
      mp_ids = ::AdvancedSearches::MolecularProfile.new(query: node.molecular_profile).results
      variant_ids = ::Variant.joins(:molecular_profiles).where(molecular_profiles: { id: mp_ids }).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_single_variant_molecular_profile_filter(node)
      return nil if node.single_variant_molecular_profile.nil?
      mp_ids = ::AdvancedSearches::MolecularProfile.new(query: node.single_variant_molecular_profile).results
      variant_ids = ::Variant.joins(:molecular_profiles).where(molecular_profiles: { id: mp_ids }).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_variant_type_filter(node)
      return nil if node.variant_type.nil?
      type_ids = ::AdvancedSearches::VariantType.new(query: node.variant_type).results
      variant_ids = ::Variant.joins(:variant_types).where(variant_types: {id: type_ids}).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_last_comment_event_filter(node)
      return nil if node.last_comment_event.nil?
      event_ids = ::AdvancedSearches::Event.new(query: node.last_comment_event).results
      variant_ids = ::Variant.joins(:last_comment).where(last_comment: {id: event_ids}).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_last_submitted_revision_event_filter(node)
      return nil if node.last_submitted_revision_event.nil?
      event_ids = ::AdvancedSearches::Event.new(query: node.last_submitted_revision_event).results
      variant_ids = ::Variant.joins(:last_submitted_revision_event).where(last_submitted_revision_event: {id: event_ids}).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_events_filter(node)
      return nil if node.events.nil?
      event_ids = ::AdvancedSearches::EventConnection.new(query: node.events).results
      variant_ids = ::Variant.joins(:events).where(events: { id: event_ids }).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_flags_filter(node)
      return nil if node.flags.nil?
      flag_ids = ::AdvancedSearches::FlagConnection.new(query: node.flags).results
      variant_ids = ::Variant.joins(:flags).where(flags: { id: flag_ids }).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_revisions_filter(node)
      return nil if node.revisions.nil?
      revision_ids = ::AdvancedSearches::RevisionConnection.new(query: node.revisions).results
      variant_ids = ::Variant.joins(:revisions).where(revisions: { id: revision_ids }).select(:id)
      base_query.where(id: variant_ids)
    end
  end
end
