module Types::BrowseTables
  class PhenotypeSortColumns < Types::BaseEnum
    value "NAME", value: "hpo_class"
    value "HPO_ID", value: "hpo_id"
    value "EVIDENCE_ITEM_COUNT", value: "evidence_count"
    value "ASSERTION_COUNT", value: "assertion_count"
  end
end
