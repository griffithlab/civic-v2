module AdvancedSearches
  class Assertion < AdvancedSearches::Base
    def base_query
      ::Assertion
    end

    def resolve_search_fields(node)
      [
        # Basic attribute filters
        resolve_id_filter(node),
        resolve_name_filter(node),
        resolve_description_filter(node),
        resolve_summary_filter(node),

        # Classification field filters
        resolve_significance_filter(node),
        resolve_assertion_direction_filter(node),
        resolve_assertion_type_filter(node),
        resolve_status_filter(node),
        resolve_variant_origin_filter(node),

        # Regulatory field filters
        resolve_regulatory_approval_filter(node),
        resolve_fda_companion_test_filter(node),
        resolve_nccn_guideline_version_filter(node),

        # Classification code filters
        resolve_amp_level_filter(node),
        resolve_has_acmg_codes_filter(node),
        resolve_has_clingen_codes_filter(node),

        # Therapy related filters
        resolve_therapy_interaction_type_filter(node),
        resolve_therapy_name_filter(node),

        # Counts and flags filters
        resolve_evidence_items_count_filter(node),
        resolve_is_flagged_filter(node),
        resolve_open_revision_count_filter(node),

        # Disease related filters
        resolve_disease_id_filter(node),
        resolve_disease_name_filter(node),

        # Molecular Profile related filter
        resolve_molecular_profile_id_filter(node),

        # Phenotype related filter
        resolve_has_phenotypes_filter(node),

        # Endorsement filter
        resolve_has_endorsements_filter(node),
      ]
    end

    # Basic attribute filters
    def resolve_id_filter(node)
      if node.id.nil?
        return nil
      end

      (clause, value) = node.id.resolve_query_for_type("assertions.id")
      base_query.where(clause, value)
    end

    def resolve_name_filter(node)
      if node.name.nil?
        return nil
      end

      # Assertion name is "AID{id}", so we need to extract the ID from the name
      (clause, value) = node.name.resolve_query_for_type("assertions.id")

      # Handle different comparison operators
      case node.name.comparison_operator
      when "EQ", "NE"
        # For exact matches, extract the ID from "AID{id}"
        id_value = value.match(/^AID(\d+)$/)&.[](1)
        return nil unless id_value

        operator = node.name.comparison_operator == "EQ" ? "=" : "<>"
        base_query.where("assertions.id #{operator} ?", id_value.to_i)
      when "CONTAINS", "DOES_NOT_CONTAIN", "STARTS_WITH"
        # For partial matches, search in the constructed name
        sql = "CONCAT('AID', assertions.id) #{clause.split(' ').last}"
        base_query.where(sql, value)
      end
    end

    def resolve_description_filter(node)
      if node.description.nil?
        return nil
      end

      (clause, value) = node.description.resolve_query_for_type("assertions.description")
      base_query.where(clause, value)
    end

    def resolve_summary_filter(node)
      if node.summary.nil?
        return nil
      end

      (clause, value) = node.summary.resolve_query_for_type("assertions.summary")
      base_query.where(clause, value)
    end

    # Classification field filters
    def resolve_significance_filter(node)
      if node.significance.nil?
        return nil
      end

      (clause, value) = node.significance.resolve_query_for_type("assertions.significance")

      # Convert the GraphQL enum value to the database integer value
      # The enum value is in the format "PATHOGENIC", but the database expects an integer
      if value.is_a?(String)
        if value.upcase == value
          # Find the corresponding value in the AssertionSignificanceType enum
          enum_type = Types::AssertionSignificanceType
          enum_value = enum_type.values.find { |v| v.graphql_name == value }

          if enum_value
            # Find the index of the string value in the Constants::SIGNIFICANCES array
            # This index is the integer value stored in the database
            significance_value = enum_value.value
            significance_index = Constants::SIGNIFICANCES.index(significance_value)

            if significance_index
              # Replace the clause to use the integer value directly
              clause = clause.sub('assertions.significance = ?', 'assertions.significance = ' + significance_index.to_s)
              value = nil
            end
          end
        else
          # If the value is a string but not all uppercase, it might be the actual string value
          # Find its index in the Constants::SIGNIFICANCES array
          significance_index = Constants::SIGNIFICANCES.index(value)

          if significance_index
            # Replace the clause to use the integer value directly
            clause = clause.sub('assertions.significance = ?', 'assertions.significance = ' + significance_index.to_s)
            value = nil
          end
        end
      end

      if value.nil?
        base_query.where(clause)
      else
        base_query.where(clause, value)
      end
    end

    def resolve_assertion_direction_filter(node)
      if node.assertion_direction.nil?
        return nil
      end

      (clause, value) = node.assertion_direction.resolve_query_for_type("assertions.assertion_direction")

      # Convert the GraphQL enum value to the database integer value
      if value.is_a?(String)
        if value.upcase == value
          # Find the corresponding value in the AssertionDirectionType enum
          enum_type = Types::AssertionDirectionType
          enum_value = enum_type.values.find { |v| v.graphql_name == value }

          if enum_value
            # Find the index of the string value in the Constants::EVIDENCE_DIRECTIONS array
            direction_value = enum_value.value
            direction_index = Constants::EVIDENCE_DIRECTIONS.index(direction_value)

            if direction_index
              # Replace the clause to use the integer value directly
              clause = clause.sub('assertions.assertion_direction = ?', 'assertions.assertion_direction = ' + direction_index.to_s)
              value = nil
            end
          end
        else
          # If the value is a string but not all uppercase, it might be the actual string value
          # Find its index in the Constants::EVIDENCE_DIRECTIONS array
          direction_index = Constants::EVIDENCE_DIRECTIONS.index(value)

          if direction_index
            # Replace the clause to use the integer value directly
            clause = clause.sub('assertions.assertion_direction = ?', 'assertions.assertion_direction = ' + direction_index.to_s)
            value = nil
          end
        end
      end

      if value.nil?
        base_query.where(clause)
      else
        base_query.where(clause, value)
      end
    end

    def resolve_assertion_type_filter(node)
      if node.assertion_type.nil?
        return nil
      end

      (clause, value) = node.assertion_type.resolve_query_for_type("assertions.assertion_type")

      # Convert the GraphQL enum value to the database integer value
      if value.is_a?(String)
        # For PREDICTIVE, we know the corresponding value is :Predictive (symbol)
        # and its index in Constants::ASSERTION_TYPES is 2
        if value == "PREDICTIVE"
          return base_query.where("assertions.assertion_type = ?", 2)
        end

        # For other values, try to find the corresponding symbol value
        # and its index in Constants::ASSERTION_TYPES
        symbol_value = case value
                       when "DIAGNOSTIC" then :Diagnostic
                       when "PROGNOSTIC" then :Prognostic
                       when "PREDICTIVE" then :Predictive
                       when "PREDISPOSING" then :Predisposing
                       when "ONCOGENIC" then :Oncogenic
                       else value.to_sym
                       end

        type_index = Constants::ASSERTION_TYPES.index(symbol_value)

        if type_index
          # Use the integer value directly in the query
          return base_query.where("assertions.assertion_type = ?", type_index)
        end
      end

      # If we couldn't convert the value, use the original clause and value
      base_query.where(clause, value)
    end

    def resolve_status_filter(node)
      if node.status.nil?
        return nil
      end

      (clause, value) = node.status.resolve_query_for_type("assertions.status")
      base_query.where(clause, value)
    end

    def resolve_variant_origin_filter(node)
      if node.variant_origin.nil?
        return nil
      end

      (clause, value) = node.variant_origin.resolve_query_for_type("assertions.variant_origin")

      # Convert the GraphQL enum value to the database integer value
      if value.is_a?(String)
        origin_index = nil

        if value.upcase == value
          # Find the corresponding value in the VariantOriginType enum
          enum_type = Types::VariantOriginType
          enum_value = enum_type.values.find { |v| v.graphql_name == value }

          if enum_value
            # Find the index of the string value in the Constants::VARIANT_ORIGINS array
            origin_value = enum_value.value
            origin_index = Constants::VARIANT_ORIGINS.index(origin_value)
          end
        else
          # If the value is a string but not all uppercase, it might be the actual string value
          # Find its index in the Constants::VARIANT_ORIGINS array
          origin_index = Constants::VARIANT_ORIGINS.index(value)
        end

        if origin_index
          # Use the integer value directly in the query
          return base_query.where("assertions.variant_origin = ?", origin_index)
        end
      end

      # If we couldn't convert the value, use the original clause and value
      base_query.where(clause, value)
    end

    # Regulatory field filters
    def resolve_regulatory_approval_filter(node)
      if node.regulatory_approval.nil?
        return nil
      end

      (clause, value) = node.regulatory_approval.resolve_query_for_type("assertions.fda_regulatory_approval")
      base_query.where(clause, value)
    end

    def resolve_fda_companion_test_filter(node)
      if node.fda_companion_test.nil?
        return nil
      end

      (clause, value) = node.fda_companion_test.resolve_query_for_type("assertions.fda_companion_test")
      base_query.where(clause, value)
    end

    def resolve_nccn_guideline_version_filter(node)
      if node.nccn_guideline_version.nil?
        return nil
      end

      (clause, value) = node.nccn_guideline_version.resolve_query_for_type("assertions.nccn_guideline_version")
      base_query.where(clause, value)
    end

    # Classification code filters
    def resolve_amp_level_filter(node)
      if node.amp_level.nil?
        return nil
      end

      (clause, value) = node.amp_level.resolve_query_for_type("assertions.amp_level")

      # Convert the GraphQL enum value to the database integer value
      if value.is_a?(String)
        level_index = nil

        if value.upcase == value
          # Find the corresponding value in the AmpLevelType enum
          enum_type = Types::AmpLevelType
          enum_value = enum_type.values.find { |v| v.graphql_name == value }

          if enum_value
            # Find the index of the string value in the Constants::AMP_LEVELS array
            level_value = enum_value.value
            level_index = Constants::AMP_LEVELS.index(level_value)
          end
        else
          # If the value is a string but not all uppercase, it might be the actual string value
          # Find its index in the Constants::AMP_LEVELS array
          level_index = Constants::AMP_LEVELS.index(value)
        end

        if level_index
          # Use the integer value directly in the query
          return base_query.where("assertions.amp_level = ?", level_index)
        end
      end

      # If we couldn't convert the value, use the original clause and value
      base_query.where(clause, value)
    end

    def resolve_has_acmg_codes_filter(node)
      if node.has_acmg_codes.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(:acmg_codes).distinct.pluck("assertions.id")

      if node.has_acmg_codes.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    def resolve_has_clingen_codes_filter(node)
      if node.has_clingen_codes.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(:clingen_codes).distinct.pluck("assertions.id")

      if node.has_clingen_codes.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    # Therapy related filters
    def resolve_therapy_interaction_type_filter(node)
      if node.therapy_interaction_type.nil?
        return nil
      end

      (clause, value) = node.therapy_interaction_type.resolve_query_for_type("assertions.therapy_interaction_type")
      base_query.where(clause, value)
    end

    def resolve_therapy_name_filter(node)
      if node.therapy_name.nil?
        return nil
      end

      (clause, value) = node.therapy_name.resolve_query_for_type("therapies.name")

      matching_ids = ::Assertion
        .joins(:therapies)
        .where(clause, value)
        .distinct
        .pluck("assertions.id")

      base_query.where(id: matching_ids)
    end

    # Counts and flags filters
    def resolve_evidence_items_count_filter(node)
      if node.evidence_items_count.nil?
        return nil
      end

      (clause, value) = node.evidence_items_count.resolve_query_for_type("assertions.evidence_items_count")
      base_query.where(clause, value)
    end

    def resolve_is_flagged_filter(node)
      if node.is_flagged.nil?
        return nil
      end

      (clause, value) = node.is_flagged.resolve_query_for_type("assertions.flagged")
      base_query.where(clause, value)
    end

    def resolve_open_revision_count_filter(node)
      if node.open_revision_count.nil?
        return nil
      end

      (clause, value) = node.open_revision_count.resolve_query_for_type("count(revisions.id)")

      matching_ids = ::Assertion.joins(:revisions)
        .where("status = 'new'")
        .group("assertions.id")
        .having(clause, value)
        .distinct
        .pluck("assertions.id")

      base_query.where(id: matching_ids)
    end

    # Disease related filters
    def resolve_disease_id_filter(node)
      if node.disease_id.nil?
        return nil
      end

      (clause, value) = node.disease_id.resolve_query_for_type("assertions.disease_id")
      base_query.where(clause, value)
    end

    def resolve_disease_name_filter(node)
      if node.disease_name.nil?
        return nil
      end

      (clause, value) = node.disease_name.resolve_query_for_type("diseases.name")

      matching_ids = ::Assertion
        .joins(:disease)
        .where(clause, value)
        .distinct
        .pluck("assertions.id")

      base_query.where(id: matching_ids)
    end

    # Molecular Profile related filter
    def resolve_molecular_profile_id_filter(node)
      if node.molecular_profile_id.nil?
        return nil
      end

      (clause, value) = node.molecular_profile_id.resolve_query_for_type("assertions.molecular_profile_id")
      base_query.where(clause, value)
    end

    # Phenotype related filter
    def resolve_has_phenotypes_filter(node)
      if node.has_phenotypes.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(:phenotypes).distinct.pluck("assertions.id")

      if node.has_phenotypes.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end

    # Endorsement filter
    def resolve_has_endorsements_filter(node)
      if node.has_endorsements.nil?
        return nil
      end

      matching_ids = ::Assertion.joins(:endorsements).distinct.pluck("assertions.id")

      if node.has_endorsements.value
        base_query.where(id: matching_ids)
      else
        base_query.where.not(id: matching_ids)
      end
    end
  end
end
