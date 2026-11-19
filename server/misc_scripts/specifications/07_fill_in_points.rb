Specification.where(assertion_type: "Oncogenic", evaluation_method: 'all_strength').all.each do |spec|
  spec.specification_criteria.each do |criterion|
    if criterion.criterion.starts_with?("OVS")
      criterion.point_value = 8
      modifiers = criterion.modifiers
      updated_modifiers = {}
      modifiers.each do |strength, adjustment|
        if strength == "Very-strong"
          # no op
        end
        if strength == "Strong"
          updated_modifiers[strength] = -4
        end
        if strength == "Moderate"
          updated_modifiers[strength] = -6
        end
        if strength == "Supporting"
          updated_modifiers[strength] = -7
        end
      end
      criterion.modifiers = updated_modifiers
    end
    if criterion.criterion.starts_with?("OS")
      criterion.point_value = 4
      modifiers = criterion.modifiers
      updated_modifiers = {}
      modifiers.each do |strength, adjustment|
        if strength == "Very-strong"
          updated_modifiers[strength] = 4
        end
        if strength == "Strong"
          # no op
        end
        if strength == "Moderate"
          updated_modifiers[strength] = -2
        end
        if strength == "Supporting"
          updated_modifiers[strength] = -3
        end
      end
      criterion.modifiers = updated_modifiers
    end
    if criterion.criterion.starts_with?("OM")
      criterion.point_value = 2
      modifiers = criterion.modifiers
      updated_modifiers = {}
      modifiers.each do |strength, adjustment|
        if strength == "Very-strong"
          updated_modifiers[strength] = 6
        end
        if strength == "Strong"
          updated_modifiers[strength] = 2
        end
        if strength == "Moderate"
          # no op
        end
        if strength == "Supporting"
          updated_modifiers[strength] = -1
        end
      end
      criterion.modifiers = updated_modifiers
    end
    if criterion.criterion.starts_with?("OP")
      criterion.point_value = 1
      modifiers = criterion.modifiers
      updated_modifiers = {}
      modifiers.each do |strength, adjustment|
        if strength == "Very-strong"
          updated_modifiers[strength] = 7
        end
        if strength == "Strong"
          updated_modifiers[strength] = 3
        end
        if strength == "Moderate"
          updated_modifiers[strength] = 1
        end
        if strength == "Supporting"
          # no op
        end
      end
      criterion.modifiers = updated_modifiers
    end
    if criterion.criterion.starts_with?("SBP")
      criterion.point_value = -1
      modifiers = criterion.modifiers
      updated_modifiers = {}
      modifiers.each do |strength, adjustment|
        if strength == "Very-strong"
          updated_modifiers[strength] = -7
        end
        if strength == "Strong"
          updated_modifiers[strength] = -3
        end
        if strength == "Supporting"
          # no op
        end
      end
      criterion.modifiers = updated_modifiers
    end
    if criterion.criterion.starts_with?("SBS")
      criterion.point_value = -4
      modifiers = criterion.modifiers
      updated_modifiers = {}
      modifiers.each do |strength, adjustment|
        if strength == "Very-strong"
          updated_modifiers[strength] = -4
        end
        if strength == "Strong"
          # no op
        end
        if strength == "Supporting"
          updated_modifiers[strength] = 3
        end
      end
      criterion.modifiers = updated_modifiers
    end
    if criterion.criterion.starts_with?("SBVS")
      criterion.point_value = -8
      modifiers = criterion.modifiers
      updated_modifiers = {}
      modifiers.each do |strength, adjustment|
        if strength == "Very-strong"
          # no op
        end
        if strength == "Strong"
          updated_modifiers[strength] = 4
        end
        if strength == "Supporting"
          updated_modifiers[strength] = 7
        end
      end
      criterion.modifiers = updated_modifiers
    end
    criterion.save!
  end
end
