module Types::Revisions
  class GeneFields < Types::BaseInputObject
    description "Fields on a Gene that curators may propose revisions to."
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The Gene's description/summary text."
    argument :source_ids, [ Int ], required: true,
      description: "Source IDs cited by the Gene's summary."
  end
end
