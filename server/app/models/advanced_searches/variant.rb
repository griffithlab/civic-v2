module AdvancedSearches
  class Variant < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Name
    include AdvancedSearches::Shared::Flagged
    include AdvancedSearches::Shared::Deprecated
    include AdvancedSearches::Shared::Activities

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
        resolve_is_flagged_filter(node),
        resolve_is_deprecated_filter(node),
        resolve_deprecation_reason_filter(node),
        resolve_variant_alias_filter(node),
        resolve_open_revision_count_filter(node),
        resolve_comment_filter(node),
        resolve_feature_filter(node),
        resolve_molecular_profile_filter(node),
        resolve_single_variant_molecular_profile_filter(node),
        resolve_variant_type_filter(node),
        resolve_coordinates_filter(node),
        resolve_revisions_filter(node),
        resolve_activity_user(node.creating_user, "CreateVariantActivity"),
        resolve_activity_user(node.deprecating_user, "DeprecateVariantActivity"),
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

      matching_variant_ids = ::Variant.joins(:open_revisions)
        .group("variants.id")
        .having(clause, value)
        .distinct
        .pluck("variants.id")

      matching_variant_coordinate_ids = ::VariantCoordinate.joins(:open_revisions)
        .group("variant_coordinates.id")
        .having(clause, value)
        .distinct
        .pluck("variant_coordinates.variant_id")

      matching_exon_coordinate_ids = ::ExonCoordinate.joins(:open_revisions)
        .group("exon_coordinates.id")
        .having(clause, value)
        .distinct
        .pluck("exon_coordinates.variant_id")

      base_query.where(id: matching_variant_ids + matching_variant_coordinate_ids + matching_exon_coordinate_ids)
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

    def resolve_revisions_filter(node)
      return nil if node.revisions.nil?
      revision_ids = AdvancedSearches::Revision.new(query: node.revisions).results
      variant_ids = ::Variant.joins(:revisions)
        .where(revisions: { id: revision_ids })
        .pluck(:id)

      matching_variant_coordinate_ids = ::VariantCoordinate.joins(:revisions)
        .where(revisions: { id: revision_ids })
        .distinct
        .pluck("variant_coordinates.variant_id")

      matching_exon_coordinate_ids = ::ExonCoordinate.joins(:revisions)
        .where(revisions: { id: revision_ids })
        .distinct
        .pluck("exon_coordinates.variant_id")

      base_query.where(id: variant_ids + matching_variant_coordinate_ids + matching_exon_coordinate_ids)
    end

    def resolve_coordinates_filter(node)
      return nil if node.coordinates.nil?

      coord_input = node.coordinates

      # Build conditions for variant_coordinates table
      variant_coord_conditions = build_coordinate_conditions(coord_input, "variant_coordinates")

      # Build conditions for exon_coordinates table
      exon_coord_conditions = build_coordinate_conditions(coord_input, "exon_coordinates")

      # Get variant IDs that match either coordinate type
      variant_ids = []

      if variant_coord_conditions.any?
        variant_coord_query = ::Variant.joins(:variant_coordinates)
        variant_coord_conditions.each do |condition|
          variant_coord_query = variant_coord_query.where(*condition)
        end
        variant_ids += variant_coord_query.pluck(:id)
      end

      if exon_coord_conditions.any?
        exon_coord_query = ::Variant.joins(:exon_coordinates)
        exon_coord_conditions.each do |condition|
          exon_coord_query = exon_coord_query.where(*condition)
        end
        variant_ids += exon_coord_query.pluck(:id)
      end

      # Return variants that match in either table
      base_query.where(id: variant_ids.uniq)
    end

    private

    def build_coordinate_conditions(coord_input, table_name)
      conditions = []

      if coord_input.chromosome
        clause, value = coord_input.chromosome.resolve_query_for_type("#{table_name}.chromosome")
        conditions << [ clause, value ]
      end

      if coord_input.start
        clause, value = coord_input.start.resolve_query_for_type("#{table_name}.start")
        conditions << [ clause, value ]
      end

      if coord_input.stop
        clause, value = coord_input.stop.resolve_query_for_type("#{table_name}.stop")
        conditions << [ clause, value ]
      end

      if coord_input.reference_bases && table_name == "variant_coordinates"
        clause, value = coord_input.reference_bases.resolve_query_for_type("#{table_name}.reference_bases")
        conditions << [ clause, value ]
      end

      if coord_input.variant_bases && table_name == "variant_coordinates"
        clause, value = coord_input.variant_bases.resolve_query_for_type("#{table_name}.variant_bases")
        conditions << [ clause, value ]
      end

      conditions
    end
  end
end
