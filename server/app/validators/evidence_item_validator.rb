class EvidenceItemValidator < ActiveModel::Validator
  def validate(record)
    validator = valid_types[record.evidence_type]

    if validator.blank?
      record.errors.add :evidence_type, "Invalid evidence type: #{record.evidence_type}"
      return
    end

    if !validator[:significance].include? record.significance
      record.errors.add :significance, "Not a valid clinical significance for #{record.evidence_type} evidence type: #{record.significance}. Valid values: #{validator[:significance].join(', ')}"
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
      record.errors.add :drug_ids, "Therapy required for #{record.evidence_type} evidence type"
    elsif !validator[:drug] && !record.drug_ids.blank?
      record.errors.add :drug_ids, "Therapy cannot be set for #{record.evidence_type} evidence type"
    end

    if record.drug_ids.size > 1 && !record.drug_interaction_type
      record.errors.add :drug_interaction_type, "Multiple therapies set but no therapy interaction type provided"
    end

    if record.drug_ids.size < 2 && record.drug_interaction_type
      record.errors.add :drug_interaction_type, "Therapy interaction type cannot be set unless multiple therapies are specified."
    end

    if record.molecular_profile.deprecated
      record.errors.add :molecular_profile_id, "Molecular Profile is deprecated."
    end
  end

  def valid_types
    @valid_types ||= {
      'Predictive' => {
        significance: ['Sensitivity/Response', 'Resistance', 'Adverse Response', 'Reduced Sensitivity', 'N/A'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: true,
      },
     'Diagnostic' => {
        significance: ['Positive', 'Negative'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false
      },
     'Prognostic' => {
        significance: ['Better Outcome', 'Poor Outcome', 'N/A'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false
      },
     'Predisposing' => {
        significance: ['Predisposition', 'Protectiveness'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false
      },
     'Oncogenic' => {
        significance: ['Oncogenicity', 'Protectiveness'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: true,
        drug: false
      },
     'Functional' => {
        significance: ['Gain of Function', 'Loss of Function', 'Unaltered Function', 'Neomorphic', 'Dominant Negative', 'Unknown'],
        evidence_direction: ['Supports', 'Does Not Support'],
        disease: false,
        drug: false
      },
    }
  end
end
