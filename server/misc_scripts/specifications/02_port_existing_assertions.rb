# run order: 2
Assertion.all.each do |assertion|
  if assertion.amp_level.present?
    possible_specs = Specification.where(specification_type: "amp_tiers", assertion_type: assertion.assertion_type, organization_id: nil)
    if possible_specs.size > 1
      raise StandardError.new("Found multiple possible specifications where one was expected")
    end

    spec = possible_specs.first

    possible_criteria = spec.specification_criteria.where(criterion: assertion.amp_level)
    if possible_criteria.size > 1
      raise StandardError.new("Found multiple possible criteria where one was expected")
    end

    met_criterion = possible_criteria.first

    spec.specification_criteria.each do |criterion|
      SpecificationEvaluation.create!(
        assertion: assertion,
        specification_criterion: criterion,
        evaluation: met_criterion == criterion ? "met" : "not_met"
      )
    end
  end

  if assertion.clingen_codes.present?
    possible_specs = Specification.where(specification_type: "clingen_codes", assertion_type: assertion.assertion_type, organization_id: nil)
    if possible_specs.size > 1
      raise StandardError.new("Found multiple possible specifications where one was expected")
    end

    spec = possible_specs.first


    criteria_with_modifiers = {}
    assertion.clingen_codes.each do |cc|
      values = cc.code.split("_")
      criteria_with_modifiers[values.first] = values.second
    end
    possible_criteria = spec.specification_criteria.where(criterion: criteria_with_modifiers.keys)
    if possible_criteria.uniq.size != assertion.clingen_codes.size
      raise StandardError.new("Mismatch between expected number of ClinGen Codes AID#{assertion.id}.")
    end

    spec.specification_criteria.each do |criterion|
      met = criteria_with_modifiers.has_key?(criterion.criterion) ? "met" : "not_met"
      modifier = criteria_with_modifiers[criterion.criterion]
      SpecificationEvaluation.create!(
        assertion: assertion,
        specification_criterion: criterion,
        evaluation: met,
        modifier: modifier
      )
    end
  end

  if assertion.acmg_codes.present?
    possible_specs = Specification.where(specification_type: "acmg_codes", assertion_type: assertion.assertion_type, organization_id: nil)
    if possible_specs.size > 1
      raise StandardError.new("Found multiple possible specifications where one was expected")
    end

    spec = possible_specs.first
    criteria_with_modifiers = {}
    assertion.acmg_codes.each do |ac|
      values = ac.code.split("_")
      criteria_with_modifiers[values.first] = values.second
    end
    possible_criteria = spec.specification_criteria.where(criterion: criteria_with_modifiers.keys)
    if possible_criteria.uniq.size != assertion.acmg_codes.size
      raise StandardError.new("Mismatch between expected number of ACMG Codes AID#{assertion.id}.")
    end

    spec.specification_criteria.each do |criterion|
      met = criteria_with_modifiers.has_key?(criterion.criterion) ? "met" : "not_met"
      modifier = criteria_with_modifiers[criterion.criterion]
      SpecificationEvaluation.create!(
        assertion: assertion,
        specification_criterion: criterion,
        evaluation: met,
        modifier: modifier
      )
    end
  end
end
