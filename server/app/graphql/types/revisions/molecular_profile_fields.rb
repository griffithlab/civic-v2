module Types::Revisions
  class MolecularProfileFields < Types::BaseInputObject
    description 'Fields on a MolecularProfile that curators may propose revisions to.'
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The MolecularProfile's description/summary text."
    argument :source_ids, [Int], required: true,
      description: "Source IDs cited by the MolecularProfile's summary."
  end
end
