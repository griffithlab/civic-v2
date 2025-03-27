module Types
  class EvidenceTypeType < Types::BaseEnum
    value "DIAGNOSTIC", value: "Diagnostic"
    value "PROGNOSTIC", value: "Prognostic"
    value "PREDICTIVE", value: "Predictive"
    value "PREDISPOSING", value: "Predisposing"
    value "FUNCTIONAL", value: "Functional"
    value "ONCOGENIC", value: "Oncogenic"
  end
end
