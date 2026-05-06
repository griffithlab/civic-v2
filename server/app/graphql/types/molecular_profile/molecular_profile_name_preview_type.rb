module Types::MolecularProfile
  class MolecularProfileNamePreviewType < Types::BaseObject
    field :segments, [ Types::MolecularProfile::MolecularProfileSegmentType ], null: false
    field :existing_molecular_profile, Types::Entities::MolecularProfileType, null: true,
      description: "The already existing MP matching this name, if it exists"
    field :deprecated_variants, [ Types::Interfaces::VariantInterface ], null: false
  end
end
