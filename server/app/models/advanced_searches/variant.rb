module AdvancedSearches
  class Variant < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Name
    include AdvancedSearches::Shared::Flagged
    include AdvancedSearches::Shared::Deprecated

    def base_query
      ::Variant.left_outer_joins(:variant_aliases)
    end

    def table_name
      "variants"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_flagged_filter(node),
        resolve_is_deprecated_filter(node),
        resolve_deprecation_reason_filter(node),
        resolve_variant_alias_filter(node),
        resolve_open_revision_count_filter(node),
        resolve_comment_filter(node),
        resolve_feature_filter(node),
        resolve_molecular_profile_filter(node),
        resolve_single_variant_molecular_profile_filter(node),
        resolve_variant_type_filter(node),
      ]
    end

    def resolve_variant_alias_filter(node)
      return nil if node.variant_alias.nil?
      clause, value = node.variant_alias.resolve_query_for_type("variant_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_open_revision_count_filter(node)
      return nil if node.open_revision_count.nil?
      (clause, value) = node.open_revision_count.resolve_query_for_type("count(revisions.id)")

      matching_ids = ::Variant.joins(:open_revisions)
        .where("status = 'new'")
        .group("variants.id")
        .having(clause, value)
        .distinct
        .pluck("variants.id")

      base_query.where(id: matching_ids)
    end

    def resolve_comment_filter(node)
      return nil if node.comment.nil?
      comment_ids = AdvancedSearches::Comment.new(query: node.comment).results
      variant_ids = ::Variant.joins(:comments).where(comments: { id: comment_ids }).select(:id)
      base_query.where(id: variant_ids)
    end

    def resolve_feature_filter(node)
      return nil if node.feature.nil?
      feature_ids = ::AdvancedSearches::Feature.new(query: node.feature).results
      variant_ids = ::Variant.joins(:feature).where(feature: { id: feature_ids }).select(:id)
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
      variant_ids = ::Variant.joins(:variant_types).where(variant_types: { id: type_ids }).select(:id)
      base_query.where(id: variant_ids)
    end
  end
end
