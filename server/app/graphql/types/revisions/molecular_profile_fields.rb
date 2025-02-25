module Types::Revisions
  class MolecularProfileFields < Types::BaseInputObject
    description "Fields on a MolecularProfile that curators may propose revisions to."
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The MolecularProfile's description/summary text."
    argument :source_ids, [ Int ], required: true,
      description: "Source IDs cited by the MolecularProfile's summary."
    argument :aliases, [ String ], required: true,
      description: "List of aliases or alternate names for the MolecularProfile."
  end
end
