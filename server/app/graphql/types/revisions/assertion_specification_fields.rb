module Types::Revisions
  class SpecificationEvaluationFields < Types::BaseInputObject
    description "Fields of a Specification Evaluation"
    argument :specification_criterium, String, required: true
    argument :evaluation, Types::Entities::SpecificationEvaluationStatusType, required: true
    argument :modifier, String, required: false
    argument :justification, String, required: false
    argument :evidence_item_ids, [ Int ], required: true
  end

  class AssertionSpecificationFields < Types::BaseInputObject
    description "Fields used for curating Assertion significance via specification codes"
    argument :assertion_id, Int, required: true
    argument :specification_id, Int, required: true
    argument :evaluations, [ SpecificationEvaluationFields ], required: true
  end
end
