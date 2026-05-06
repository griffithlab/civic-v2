module Types::Revisions
  class GeneVariantFields < Types::BaseInputObject
    description "Fields on a GeneVariant that curators may propose revisions to."
    argument :name, String, required: true,
      description: "The Variant's name."
    argument :aliases, [ String ], required: true,
      description: "List of aliases or alternate names for the Variant."
    argument :hgvs_descriptions, [ String ], required: true,
      description: "List of HGVS descriptions for the Variant."
    argument :clinvar_ids, Types::Revisions::ClinvarInputType, required: true,
      description: "List of ClinVar IDs for the Variant."
    argument :variant_type_ids, [ Int ], required: true,
      description: "List of IDs for the variant types for this Variant"
    argument :coordinates, Types::Revisions::GeneVariantCoordinateInputType, required: true,
      description:  "The genomic coordinates for this Variant."
    argument :feature_id, Int, required: true,
      description: "The ID of the Feature this Variant corresponds to."
  end
end
