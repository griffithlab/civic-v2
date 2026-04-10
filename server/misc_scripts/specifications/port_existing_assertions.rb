Assertion.all.each do |assertion|
  if assertion.amp_level.present?
    possible_specs = Specification.where(specification_type: "amp_tiers", assertion_type: assertion.assertion_type, organization_id: nil)
    if possible_specs.size > 1
      raise StandardError.new("Found multiple possible specifications where one was expected")
    end

    spec = possible_specs.first

    possible_criteria = spec.specification_criterium.where(criterium: assertion.amp_level)
    if possible_criteria.size > 1
      raise StandardError.new("Found multiple possible criteria where one was expected")
    end

    criterium = possible_criteria.first

    assertion.specification_criteria = [ criterium ]
    if assertion.status == 'accepted'
      assertion.save!
    else
      assertion.save(validate: false)
    end
  end

  if assertion.clingen_codes.present?
    possible_specs = Specification.where(specification_type: "clingen_codes", assertion_type: assertion.assertion_type, organization_id: nil)
    if possible_specs.size > 1
      raise StandardError.new("Found multiple possible specifications where one was expected")
    end

    spec = possible_specs.first

    possible_criteria = spec.specification_criterium.where(criterium: assertion.clingen_codes.map(&:code))
    if possible_criteria.uniq.size != assertion.clingen_codes.size
      raise StandardError.new("Mismatch between expected number of ClinGen Codes AID#{assertion.id}.")
    end

    assertion.specification_criteria = possible_criteria
    if assertion.status == 'accepted'
      assertion.save!
    else
      assertion.save(validate: false)
    end
  end

  if assertion.acmg_codes.present?
    possible_specs = Specification.where(specification_type: "acmg_codes", assertion_type: assertion.assertion_type, organization_id: nil)
    if possible_specs.size > 1
      raise StandardError.new("Found multiple possible specifications where one was expected")
    end

    spec = possible_specs.first

    possible_criteria = spec.specification_criterium.where(criterium: assertion.acmg_codes.map(&:code))
    if possible_criteria.uniq.size != assertion.acmg_codes.size
      raise StandardError.new("Mismatch between expected number of ACMG Codes AID#{assertion.id}.")
    end

    assertion.specification_criteria = possible_criteria
    if assertion.status == 'accepted'
      assertion.save!
    else
      assertion.save(validate: false)
    end
  end
end
