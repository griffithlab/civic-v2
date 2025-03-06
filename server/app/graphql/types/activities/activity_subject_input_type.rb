module Types::Activities
  class ActivitySubjectInputType < Types::BaseEnum
    value "FEATURE", value: "Feature"
    value "VARIANT", value: "Variant"
    value "EVIDENCE_ITEM", value: "EvidenceItem"
    value "ASSERTION", value: "Assertion"
    value "REVISION", value: "Revision"
    value "SOURCE", value: "Source"
    value "SOURCE_SUGGESTION", value: "SourceSuggestion"
    value "VARIANT_GROUP", value: "VariantGroup"
    value "MOLECULAR_PROFILE", value: "MolecularProfile"
    value "FLAG", value: "Flag"
    value "REVISION_SET", value: "RevisionSet"
    value "COMMENT", value: "Comment"
  end
end
