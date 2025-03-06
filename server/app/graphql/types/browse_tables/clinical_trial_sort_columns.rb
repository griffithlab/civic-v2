module Types::BrowseTables
  class ClinicalTrialSortColumns < Types::BaseEnum
    value "NAME", value: "name"
    value "NCT_ID", value: "nct_id"
    value "EVIDENCE_ITEM_COUNT", value: "evidence_count"
    value "SOURCE_COUNT", value: "source_count"
  end
end
