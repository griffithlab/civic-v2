module Types::Revisions
  class RegionVariantFields < Types::BaseInputObject
    description "Fields on a RegionVariant that curators may propose revisions to."
    argument :aliases, [ String ], required: true,
      description: "List of aliases or alternate names for the Variant."
    argument :variant_type_ids, [ Int ], required: true,
      description: "List of IDs for the variant types for this Variant"
  end
end
