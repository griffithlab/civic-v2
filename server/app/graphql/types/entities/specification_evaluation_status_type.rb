module Types::Entities
  class SpecificationEvaluationStatusType < Types::BaseEnum
    value "MET", value: "met"
    value "NOT_MET", value: "not_met"
    value "NOT_EVALUATED", value: "not_evaluated"
    value "EXCLUDED", value: "excluded"
  end
end
