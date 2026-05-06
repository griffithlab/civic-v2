module Types::MolecularProfile
  class EvidenceItemsByTypeType < Types::BaseObject
    field :molecular_profile_id, Int, null: false
    field :diagnostic_count, Int, null: false
    field :prognostic_count, Int, null: false
    field :predictive_count, Int, null: false
    field :predisposing_count, Int, null: false
    field :functional_count, Int, null: false
    field :oncogenic_count, Int, null: false
  end
end
