module Types::Revisions
  class GeneVariantFields < Types::BaseInputObject
    description 'Fields on a GeneVariant that curators may propose revisions to.'
    argument :name, String, required: true,
      description: "The Variant's name."
    argument :aliases, [String], required: true,
      description: 'List of aliases or alternate names for the Variant.'
    argument :hgvs_descriptions, [String], required: true,
      description: 'List of HGVS descriptions for the Variant.'
    argument :clinvar_ids, Types::Revisions::ClinvarInputType, required: true,
      description: 'List of ClinVar IDs for the Variant.'
    argument :variant_type_ids, [Int], required: true,
      description: 'List of IDs for the variant types for this Variant'
    argument :reference_build, Types::NullableValueInputType.for(Types::ReferenceBuildType), required: true,
      description: 'The reference build for the genomic coordinates of this Variant.'
    argument :ensembl_version, Types::NullableValueInputType.for(GraphQL::Types::Int), required: true,
      description: 'The Ensembl database version.'
    argument :secondary_coordinates, Types::Revisions::CoordinateInputType, required: true,
      description:  "In the case of Fusions these will be the coordinates of the 3' partner, otherwise set the values to null."
    argument :primary_coordinates, Types::Revisions::CoordinateInputType, required: true,
      description:  "The primary coordinates for this Variant. In the case of Fusions this will be the coordinates of the 5' partner."
    argument :feature_id, Int, required: true,
      description: 'The ID of the Feature this Variant corresponds to.'
    argument :reference_bases, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: 'Reference bases for this variant'
    argument :variant_bases, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: 'Variant bases for this variant'
  end
end

