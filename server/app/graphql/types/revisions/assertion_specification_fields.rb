module Types::Revisions
  class SpecificationEvaluationFields < Types::BaseInputObject
    field :specification_criteria_id, Int, required: true
    field :evaluation, Types::Entities::SpecificationEvaluationStatus, required: true
    field :modifier, String, required: false
    field :justification, String, required: true
  end

  class AssertionSpecificationFields < Types::BaseInputObject
    description "Fields used for curating Assertion significance via specification codes"
    field :specification_id, Int, required: true
    field :evaluations, [ SpecificationEvaluationFields ], required: true
  end
end
