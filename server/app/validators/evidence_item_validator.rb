class Validators::EvidenceItemValidator < ActiveModeel::Validator
  def validate(record)
    validator = valid_types[record.evidence_type]

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
    elsif !valdiator[:drug] && !record.drug_ids.blank?
      record.errors.add :drug_ids, "Drug(s) cannot be set for #{record.evidence_type} evidence type"
    end

    if record.drug_ids.size > 1 && !record.drug_interaction_type
      record.errors.add :drug_interaction_type, "Multiple drugs set but no drug interaction type provided"
    end
  end

  def valid_types
    @valid_types ||= {
      'Predictive' => {
        clinical_significance: ['Sensitivity/Response', 'Resistance', 'Adverse Response', 'Reduced Sensitivity', 'N/A'],
        evidence_direction: ['Supports', 'Does not support'],
        disease: true,
        drug: true,
      },
     'Diagnostic' => {
        clinical_significance: ['Positive', 'Negative'],
        evidence_direction: ['Supports', 'Does not support'],
        disease: true,
        drug: false
      },
     'Prognostic'
        clinical_significance: ['Better Outcome', 'Poor Outcome', 'N/A'],
        evidence_direction: ['Supports', 'Does not support'],
        disease: true,
        drug: false
      },
     'Predisposing'
        clinical_significance: ['N/A'],
        evidence_direction: ['N/A'],
        disease: true,
        drug: false
      },
     'Oncogenic'
        clinical_significance: ['N/A'],
        evidence_direction: ['N/A'],
        disease: true,
        drug: false
      },
     'Functional'
        clinical_significance: ['Gain of Function', 'Loss of Function', 'Unaltered Function', 'Neomorphic', 'Dominant Negative', 'Unknown'],
        evidence_direction: ['Supports', 'Does not support'],
        disease: false,
        drug: false
      },
    }
  end
end
