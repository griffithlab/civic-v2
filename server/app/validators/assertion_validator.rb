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
    end

    if validator[:drug] && record.drug_ids.blank?
      record.errors.add :drug_ids, "Therapy required for #{record.assertion_type} assertion type"
    elsif !validator[:drug] && !record.drug_ids.blank?
      record.errors.add :drug_ids, "Therapy cannot be set for #{record.assertion_type} assertion type"
    end

    if record.drug_ids.size > 1 && !record.drug_interaction_type
      record.errors.add :drug_interaction_type, "Multiple therapies set but no therapy interaction type provided"
    end

    if record.drug_ids.size < 2 && record.drug_interaction_type
      record.errors.add :drug_interaction_type, "Therapy interaction type cannot be set unless multiple drugs are specified."
    end

    if !validator[:acmg_codes] && record.acmg_code_ids.size > 0
      record.errors.add :acmg_code_ids, "Assertions of type #{record.assertion_type} may not have ACMG codes attached."
    end

    if !validator[:clingen_codes] && record.clingen_code_ids.size > 0
      record.errors.add :acmg_code_ids, "Assertions of type #{record.assertion_type} may not have ClinGen/CGC/VICC codes attached."
    end

    if !validator[:amp_level] && record.amp_level.present?
      record.errors.add :amp_level, "Assertions of type #{record.assertion_type} may not have an AMP/ASCO/CAP level attached."
    end

    if !validator[:allow_regulatory_approval] && !record.fda_regulatory_approval.nil?
      record.errors.add :fda_regulatory_approval, "Assertions without a therapy cannot specify FDA regulatory approval."
    end

    if record.nccn_guideline_version
      if !record.nccn_guideline_version.match(/\A\d{1,2}\.\d{4}\z/)
        record.errors.add :nccn_guideline_version, "NCCN guideline version '#{record.nccn_guideline_version}' doesn't match the expected format '<version_number>.<year>'"
      end
      if !record.nccn_guideline
        record.errors.add :nccn_guideline, "NCCN guideline is required when a NCCN guideline version is set."
      end
    end

    if record.nccn_guideline && !record.nccn_guideline_version
      record.errors.add :nccn_guideline_version, "Assertions with NCCN guideline requires a NCCN guideline version."
    end
  end

  def valid_types
    @valid_types ||= {
      'Predictive' => {
        significance: ['Sensitivity/Response', 'Resistance', 'Adverse Response', 'Reduced Sensitivity', 'N/A'],
        assertion_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: true,
        acmg_codes: false,
        amp_level: true,
        clingen_codes: false,
        allow_regulatory_approval: true,
      },
     'Diagnostic' => {
        significance: ['Positive', 'Negative'],
        assertion_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false,
        acmg_codes: false,
        amp_level: true,
        clingen_codes: false,
        allow_regulatory_approval: false,
      },
     'Prognostic' => {
        significance: ['Better Outcome', 'Poor Outcome', 'N/A'],
        assertion_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false,
        acmg_codes: false,
        amp_level: true,
        clingen_codes: false,
        allow_regulatory_approval: false,
      },
     'Predisposing' => {
       significance: ['Pathogenic', 'Likely Pathogenic', 'Benign', 'Likely Benign', 'Uncertain Significance'],
        assertion_direction: ['Supports'],
        disease: true,
        drug: false,
        acmg_codes: true,
        amp_level: false,
        clingen_codes: false,
        allow_regulatory_approval: false,
      },
     'Oncogenic' => {
       significance: ['Oncogenic', 'Likely Oncogenic', 'Uncertain', 'Likely Benign', 'Benign'],
        assertion_direction: ['Supports'],
        disease: true,
        drug: false,
        acmg_codes: false,
        amp_level: false,
        clingen_codes: true,
        allow_regulatory_approval: false,
      },
    }
  end
end
