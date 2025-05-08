module Types
  class SourceLinkReasonType < Types::BaseEnum
    value "SAME_CLINICAL_TRIAL", value: "same_clinical_trial"
    value "OVERLAPPING_DATA_OR_PATIENTS", value: "overlapping_data_or_patients"
    value "RELATED_ABSTRACT", value: "related_abstract"
    value "OTHER", value: "other"
  end
end
