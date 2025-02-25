module Types::Revisions
  class VariantGroupFields < Types::BaseInputObject
    description "Fields on a VariantGroup that curators may propose revisions to."
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The VariantGroups's description/summary text."
    argument :name, GraphQL::Types::String, required: true,
      description: "The VariantGroups's name."
    argument :source_ids, [ Int ], required: true,
      description: "Source IDs cited by the VariantGroup's summary."
    argument :variant_ids, [ Int ], required: true,
      description: "Variants in this VariantGroup."
  end
end
