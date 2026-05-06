module Types::Revisions
  class FactorFields < Types::BaseInputObject
    description "Fields on a Factor that curators may propose revisions to."
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The Factor's description/summary text."
    argument :name, GraphQL::Types::String, required: true,
      description: "The Factor's display name."
    argument :full_name, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The Factor's full name if applicable."
    argument :ncit_id, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "NCI Thesaurus concept ID for this Factor"
    argument :source_ids, [ Int ], required: true,
      description: "Source IDs cited by the Factor's summary."
    argument :aliases, [ String ], required: true,
      description: "List of aliases or alternate names for the Factor."
  end
end
