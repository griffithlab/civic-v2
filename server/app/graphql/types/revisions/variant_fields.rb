module Types::Revisions
  class VariantFields < Types::BaseInputObject
    description 'Fields on a Variant that curators may propose revisions to.'
    argument :name, String, required: true,
      description: "The Variant's name."
    argument :description, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: "The Variant's description/summary text."
    argument :source_ids, [Int], required: true,
      description: "Source IDs cited by the Variant's summary."
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
    argument :ensembl_version, Int, required: true,
      description: 'The Ensembl database version.'
    argument :secondary_coordinates, Types::Revisions::CoordinateInputType, required: true,
      description:  "In the case of Fusions these will be the coordinates of the 3' partner, otherwise null."
    argument :primary_coordinates, Types::Revisions::CoordinateInputType, required: true,
      description:  "The primary coordinates for this Variant. In the case of Fusions this will be the coordinates of the 5' partner."
    argument :gene_id, Int, required: true,
      description: 'The ID of the Gene this Variant corresponds to.'
    argument :reference_bases, Types::NullableValueInputType.for(GraphQL::Types::String), required: true
    argument :variant_bases, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
  end
end

