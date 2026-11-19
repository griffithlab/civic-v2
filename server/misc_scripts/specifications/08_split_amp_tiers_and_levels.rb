SpecificationCriterion.where(criterion: "Tier I - Level A").all.each do |criterion|
  SpecificationEvaluation.where(specification_criterion_id: criterion.id).all.each do |evaluation|
    evaluation.modifier = "Level A"
    evaluation.save
  end
end

SpecificationCriterion.where(criterion: "Tier I - Level B").all.each do |criterion|
  new_criterion = SpecificationCriterion.find_by(criterion: "Tier I - Level A", specification_id: criterion.specification_id)
  SpecificationEvaluation.where(specification_criterion_id: criterion.id).all.each do |evaluation|
    evaluation.specification_criterion_id = new_criterion.id
    evaluation.modifier = "Level B"
    evaluation.save
  end
  new_criterion.criterion = "Tier I"
  new_criterion.modifiers = { "Level A" => "", "Level B" => "" }
  new_criterion.description = ""
  new_criterion.save
  criterion.delete
end

SpecificationCriterion.where(criterion: "Tier II - Level C").all.each do |criterion|
  SpecificationEvaluation.where(specification_criterion_id: criterion.id).all.each do |evaluation|
    evaluation.modifier = "Level C"
    evaluation.save
  end
end

SpecificationCriterion.where(criterion: "Tier II - Level D").all.each do |criterion|
  new_criterion = SpecificationCriterion.find_by(criterion: "Tier II - Level C", specification_id: criterion.specification_id)
  SpecificationEvaluation.where(specification_criterion_id: criterion.id).all.each do |evaluation|
    evaluation.specification_criterion_id = new_criterion.id
    evaluation.modifier = "Level D"
    evaluation.save
  end
  new_criterion.criterion = "Tier II"
  new_criterion.modifiers = { "Level C" => "", "Level D" => "" }
  new_criterion.description = ""
  new_criterion.save
  criterion.delete
end
