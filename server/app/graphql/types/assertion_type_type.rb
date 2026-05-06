module Types
  class AssertionTypeType < Types::BaseEnum
    value "DIAGNOSTIC", value: "Diagnostic"
    value "PROGNOSTIC", value: "Prognostic"
    value "PREDICTIVE", value: "Predictive"
    value "PREDISPOSING", value: "Predisposing"
    value "ONCOGENIC", value: "Oncogenic"
  end
end
