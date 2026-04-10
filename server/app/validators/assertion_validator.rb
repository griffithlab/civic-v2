class AssertionValidator < ActiveModel::Validator
  def validate(record)
    validator = valid_types[record.assertion_type]

    if validator.blank?
      record.errors.add :assertion_type, "Invalid assertion type: #{record.assertion_type}"
      return
    end

    if !validator[:significance].include? record.significance
      record.errors.add :significance, "Not a valid clinical significance for #{record.assertion_type} assertion type: #{record.significance}. Valid values: #{validator[:significance].join(', ')}"
    end

    if !validator[:assertion_direction].include? record.assertion_direction
      record.errors.add :assertion_direction, "Not a valid assertion direction for #{record.assertion_type} assertion type: #{record.assertion_direction}. Valid values: #{validator[:assertion_direction].join(', ')}"
    end

    if validator[:disease] && !record.disease_id
      record.errors.add :disease_id, "Disease required for #{record.assertion_type} assertion type"
    elsif !validator[:disease] && record.disease_id
      record.errors.add :disease_id, "Disease cannot be set for #{record.assertion_type} assertion type"
    elsif validator[:disease] && record.disease&.deprecated
      record.errors.add :disease_id, "Disease is deprecated. Select a different term. The current term may have been added into CIViC twice on accident and has been deprecated. Switch to the non-deprecated term by deleting the current term from the Revise form and re-entering it."
    end

    if validator[:therapy]
      if record.therapy_ids.blank?
        record.errors.add :therapy_ids, "Therapy required for #{record.assertion_type} assertion type"
      else
        deprecated_therapies = record.therapies.select { |t| t.deprecated }
        if deprecated_therapies.count > 0
          record.errors.add :therapy_ids, "One or more Therapy is deprecated. Select a different term. The current term may have been added into CIViC twice on accident and has been deprecated. Switch to the non-deprecated term by deleting the current term from the Revise form and re-entering it."
        end
      end
    elsif !validator[:therapy] && !record.therapy_ids.blank?
      record.errors.add :therapy_ids, "Therapy cannot be set for #{record.assertion_type} assertion type"
    end

    if record.therapy_ids.size > 1 && !record.therapy_interaction_type
      record.errors.add :therapy_interaction_type, "Multiple therapies set but no therapy interaction type provided"
    end

    if record.therapy_ids.size < 2 && record.therapy_interaction_type
      record.errors.add :therapy_interaction_type, "Therapy interaction type cannot be set unless multiple therapys are specified."
    end

    record.specification_criteria.each do |criterium|
      if criterium.specification.assertion_type != record.assertion_type
        record.errors.add(:specification, "Assertions of type #{record.assertion_type} may not have #{criterium.specification.name} classifications attached.")
      end
    end

    utilized_specifications = record.specification_criteria.map(&:specification)
    if utilized_specifications.uniq.size > 1
      record.errors.add(:specification, "All classifications must come from the same specification. #{utilized_specifications.map(&:name).join(",")} found.")
    end

    if !validator[:allow_regulatory_approval] && !record.fda_regulatory_approval.nil?
      record.errors.add :fda_regulatory_approval, "Assertions without a therapy cannot specify FDA regulatory approval."
    end

    # if record.nccn_guideline_version
    #   if !record.nccn_guideline_version.match(/\A\d{1,2}\.\d{4}\z/)
    #     record.errors.add :nccn_guideline_version, "NCCN guideline version '#{record.nccn_guideline_version}' doesn't match the expected format '<version_number>.<year>'"
    #   end
    #   if !record.nccn_guideline
    #     record.errors.add :nccn_guideline, "NCCN guideline is required when a NCCN guideline version is set."
    #   end
    # end

    if record.nccn_guideline && !record.nccn_guideline_version
      record.errors.add :nccn_guideline_version, "Assertions with NCCN guideline requires a NCCN guideline version."
    end

    if record.variant_origin == "Combined" && !record.molecular_profile.is_multi_variant?
      record.errors.add :variant_origin, "Combined variant origin can only apply when the Molecular Profile has multiple Variants."
    end
  end

  def valid_types
    @valid_types ||= {
      "Predictive" => {
        significance: [ "Sensitivity/Response", "Resistance", "Adverse Response", "Reduced Sensitivity", "N/A" ],
        assertion_direction: [ "Supports", "Does Not Support" ],
        disease: true,
        therapy: true,
        allow_regulatory_approval: true,
      },
     "Diagnostic" => {
        significance: [ "Positive", "Negative" ],
        assertion_direction: [ "Supports", "Does Not Support" ],
        disease: true,
        therapy: false,
        allow_regulatory_approval: false,
      },
     "Prognostic" => {
        significance: [ "Better Outcome", "Poor Outcome", "N/A" ],
        assertion_direction: [ "Supports", "Does Not Support" ],
        disease: true,
        therapy: false,
        allow_regulatory_approval: false,
      },
     "Predisposing" => {
        significance: [ "Pathogenic", "Likely Pathogenic", "Benign", "Likely Benign", "Uncertain Significance" ],
        assertion_direction: [ "Supports" ],
        disease: true,
        therapy: false,
        allow_regulatory_approval: false,
      },
     "Oncogenic" => {
        significance: [ "Oncogenic", "Likely Oncogenic", "Uncertain Significance", "Likely Benign", "Benign" ],
        assertion_direction: [ "Supports" ],
        disease: true,
        therapy: false,
        allow_regulatory_approval: false,
      },
    }
  end
end
