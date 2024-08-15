module Types::Revisions
  class FusionFields < Types::BaseInputObject
    description 'Fields on a Fusion that curators may propose revisions to.'
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The Fusion's description/summary text."
    argument :source_ids, [Int], required: true,
      description: "Source IDs cited by the Fusion's summary."
    argument :aliases, [String], required: true,
      description: 'List of aliases or alternate names for the Fusion.'
  end
end
