module Types
  class FeatureStatsType < Types::BaseObject
    field :variant_count, Int, null: false
    field :molecular_profile_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false
  end
end
