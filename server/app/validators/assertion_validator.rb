class AssertionValidator < ActiveModel::Validator
  def validate(record)
    validator = valid_types[record.evidence_type]

    if validator.blank?
      record.errors.add :evidence_type, "Invalid assertion type: #{record.assertion_type}"
      return
    end

    if !validator[:clinical_significance].include? record.clinical_significance
      record.errors.add :clinical_significance, "Not a valid clinical significance for #{record.evidence_type} evidence type: #{record.clinical_significance}. Valid values: #{validator[:clinical_significance].join(', ')}"
    end

    if !validator[:evidence_direction].include? record.evidence_direction
      record.errors.add :evidence_direction, "Not a valid evidence direction for #{record.evidence_type} evidence type: #{record.evidence_direction}. Valid values: #{validator[:evidence_direction].join(', ')}"
    end

    if validator[:disease] && !record.disease_id
      record.errors.add :disease_id, "Disease required for #{record.evidence_type} evidence type"
    elsif !validator[:disease] && record.disease_id
      record.errors.add :disease_id, "Disease cannot be set for #{record.evidence_type} evidence type"
    end

    if validator[:drug] && record.drug_ids.blank?
      record.errors.add :drug_ids, "Drug(s) required for #{record.evidence_type} evidence type"
    elsif !validator[:drug] && !record.drug_ids.blank?
      record.errors.add :drug_ids, "Drug(s) cannot be set for #{record.evidence_type} evidence type"
    end

    if record.drug_ids.size > 1 && !record.drug_interaction_type
      record.errors.add :drug_interaction_type, "Multiple drugs set but no drug interaction type provided"
    end

    if record.drug_ids.size < 2 && record.drug_interaction_type
      record.errors.add :drug_interaction_type, "Drug interaction type cannot be set unless multiple drugs are specified."
    end

    if !validator[:acmg_codes] && record.acmg_code_ids.size > 0
      record.errors.add :acmg_code_ids, "Assertions of type #{record.evidence_type} may not have ACMG codes attached."
    end

    if !validator[:amp_level] && record.amp_level.present?
      record.errors.add :amp_level, "Assertions of type #{record.evidence_type} may not have an AMP/ASCO/CAP level attached."
    end

    if !validator[:allow_regulatory_approval] && !record.fda_regulatory_approval.nil?
      record.errors.add :fda_regulatory_approval, "Assertions without a drug cannot specify FDA regulatory approval."
    end

    if record.nccn_guideline_version
      if !record.nccn_guideline_version.match(/\A\d{1,2}\.\d{4}\z/)
        record.errors.add :nccn_guideline_version, "NCCN guideline version '#{record.nccn_guideline_version}' doesn't match the expected format '<version_number>.<year>'"
      end
      if !record.nccn_guidline
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
        clinical_significance: ['Sensitivity/Response', 'Resistance', 'Adverse Response', 'Reduced Sensitivity', 'N/A'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: true,
        acmg_codes: false,
        amp_level: true,
        allow_regulatory_approval: true,
      },
     'Diagnostic' => {
        clinical_significance: ['Positive', 'Negative'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false,
        acmg_codes: false,
        amp_level: true,
        allow_regulatory_approval: false,
      },
     'Prognostic' => {
        clinical_significance: ['Better Outcome', 'Poor Outcome', 'N/A'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false,
        acmg_codes: false,
        amp_level: true,
        allow_regulatory_approval: false,
      },
     'Predisposing' => {
       clinical_significance: ['Pathogenic', 'Likely Pathogenic', 'Benign', 'Likely Benign', 'Uncertain Significance'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false,
        acmg_codes: true,
        amp_level: false,
        allow_regulatory_approval: false,
      },
    }
  end
end
