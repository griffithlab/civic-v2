module AdvancedSearches
  class Feature < AdvancedSearches::Base
    include AdvancedSearches::Shared::Id
    include AdvancedSearches::Shared::Flagged
    include AdvancedSearches::Shared::Deprecated
    include AdvancedSearches::Shared::Description
    include AdvancedSearches::Shared::Activities

    def base_query
      ::Feature.left_outer_joins(:feature_aliases)
    end

    def table_name
      "features"
    end

    def resolve_search_fields(node)
      [
        resolve_id_filter(node),
        resolve_entrez_id_filter(node),
        resolve_entrez_symbol_filter(node),
        resolve_description_filter(node),
        resolve_alias_filter(node),
        resolve_open_revision_count_filter(node),
        resolve_has_assertion_filter(node),
        resolve_is_flagged_filter(node),
        resolve_feature_instance_type_filter(node),
        resolve_ncit_id_filter(node),
        resolve_five_prime_partner_entrez_id(node),
        resolve_three_prime_partner_entrez_id(node),
        resolve_five_prime_partner_entrez_symbol(node),
        resolve_three_prime_partner_entrez_symbol(node),
        resolve_is_deprecated_filter(node),
        resolve_deprecation_reason_filter(node),
        resolve_activity_user(node.creating_user, "CreateFeatureActivity"),
        resolve_activity_user(node.deprecating_user, "DeprecateFeatureActivity"),
      ]
    end

    def resolve_entrez_id_filter(node)
      if node.entrez_id.nil?
        return nil
      end

      (clause, value) = node.entrez_id.resolve_query_for_type("genes.entrez_id")

      matching_ids = ::Features::Gene
        .joins(:feature)
        .where(clause, value)
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end

    def resolve_entrez_symbol_filter(node)
      if node.entrez_symbol.nil?
        return nil
      end

      (clause, value) = node.entrez_symbol.resolve_query_for_type("features.name")
      base_query.where(clause, value)
    end

    def resolve_alias_filter(node)
      if node.alias.nil?
        return nil
      end

      (clause, value) = node.alias.resolve_query_for_type("feature_aliases.name")
      base_query.where(clause, value)
    end

    def resolve_open_revision_count_filter(node)
      if node.open_revision_count.nil?
        return nil
      end

      (clause, value) = node.open_revision_count.resolve_query_for_type("count(revisions.id)")

      matching_ids = ::Feature.joins(:revisions)
        .where("status = 'new'")
        .group("features.id")
        .having(clause, value)
        .distinct
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end

    def resolve_has_assertion_filter(node)
      if node.has_assertion.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(molecular_profile: { variants: [ :feature ] }).distinct.pluck("features.id")

      if node.has_assertion.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_feature_instance_type_filter(node)
      if node.feature_instance_type.nil?
        return nil
      end

      (clause, value) = node.feature_instance_type.resolve_query_for_type("features.feature_instance_type")
      base_query.where(clause, value)
    end

    def resolve_ncit_id_filter(node)
      if node.ncit_id.nil?
        return nil
      end

      (clause, value) = node.ncit_id.resolve_query_for_type("factors.ncit_id")

      matching_ids = ::Features::Factor
        .joins(:feature)
        .where(clause, value)
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end

    def resolve_five_prime_partner_entrez_id(node)
      if node.five_prime_partner_entrez_id.nil?
        return nil
      end

      (clause, value) = node.five_prime_partner_entrez_id.resolve_query_for_type("genes.entrez_id")

      matching_ids = ::Features::Fusion
        .joins(:five_prime_gene, :feature)
        .where(clause, value)
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end

    def resolve_three_prime_partner_entrez_id(node)
      if node.three_prime_partner_entrez_id.nil?
        return nil
      end

      (clause, value) = node.three_prime_partner_entrez_id.resolve_query_for_type("genes.entrez_id")

      matching_ids = ::Features::Fusion
        .joins(:three_prime_gene, :feature)
        .where(clause, value)
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end

    def resolve_five_prime_partner_entrez_symbol(node)
      if node.five_prime_partner_entrez_symbol.nil?
        return nil
      end

      (clause, value) = node.five_prime_partner_entrez_symbol.resolve_query_for_type("gene_features.name")

      matching_ids = ::Features::Fusion
        .joins(:feature)
        .joins("INNER JOIN features as gene_features ON gene_features.id = fusions.five_prime_gene_id")
        .where(clause, value)
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end

    def resolve_three_prime_partner_entrez_symbol(node)
      if node.three_prime_partner_entrez_symbol.nil?
        return nil
      end

      (clause, value) = node.three_prime_partner_entrez_symbol.resolve_query_for_type("gene_features.name")

      matching_ids = ::Features::Fusion
        .joins(:feature)
        .joins("INNER JOIN features as gene_features ON gene_features.id = fusions.three_prime_gene_id")
        .where(clause, value)
        .pluck("features.id")

      base_query.where(id: matching_ids)
    end
  end
end
