module Types::Revisions
  class FactorVariantFields < Types::BaseInputObject
    description 'Fields on a FactorVariant that curators may propose revisions to.'
    argument :name, String, required: true,
      description: "The Variant's name."
    argument :aliases, [String], required: true,
      description: 'List of aliases or alternate names for the Variant.'
    argument :variant_type_ids, [Int], required: true,
      description: 'List of IDs for the variant types for this Variant'
    argument :feature_id, Int, required: true,
      description: 'The ID of the Feature this Variant corresponds to.'
    argument :ncit_id, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "NCI Thesaurus concept ID for this Factor"
  end
end

