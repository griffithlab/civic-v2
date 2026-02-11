module Types::Revisions
  class RegionFields < Types::BaseInputObject
    description "Fields on a Region that curators may propose revisions to."
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The Region's description/summary text."
    argument :source_ids, [ Int ], required: true,
      description: "Source IDs cited by the Region's summary."
    argument :aliases, [ String ], required: true,
      description: "List of aliases or alternate names for the Region."
  end
end
