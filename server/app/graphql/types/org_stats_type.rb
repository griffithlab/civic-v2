module Types
  class OrgStatsType < Types::BaseObject
    field :comments, Int, null: false
    field :revisions, Int, null: false
    field :applied_revisions, Int, null: false
    field :submitted_evidence_items, Int, null: false
    field :accepted_evidence_items, Int, null: false
    field :suggested_sources, Int, null: false
    field :submitted_assertions, Int, null: false
    field :accepted_assertions, Int, null: false
  end
end
