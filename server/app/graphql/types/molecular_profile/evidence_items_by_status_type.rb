module Types::MolecularProfile
  class EvidenceItemsByStatusType < Types::BaseObject
    field :molecular_profile_id, Int, null: false
    field :accepted_count, Int, null: false
    field :rejected_count, Int, null: false
    field :submitted_count, Int, null: false
  end
end
