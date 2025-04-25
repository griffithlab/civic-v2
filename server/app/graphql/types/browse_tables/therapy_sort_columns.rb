module Types::BrowseTables
  class TherapySortColumns < Types::BaseEnum
    value "NAME", value: "name"
    value "NCIT_ID", value: "ncit_id"
    value "EVIDENCE_ITEM_COUNT", value: "evidence_count"
    value "ASSERTION_COUNT", value: "assertion_count"
  end
end
