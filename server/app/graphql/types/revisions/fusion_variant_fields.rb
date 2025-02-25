module Types::Revisions
  class FusionVariantFields < Types::BaseInputObject
    description "Fields on a FusionVariant that curators may propose revisions to."
    argument :aliases, [ String ], required: true,
      description: "List of aliases or alternate names for the Variant."
    argument :variant_type_ids, [ Int ], required: true,
      description: "List of IDs for the variant types for this Variant"
    argument :coordinates, Types::Fusion::FusionVariantInputType, required: true,
      description:  "The exon coordinates for this Variant."
  end
end
