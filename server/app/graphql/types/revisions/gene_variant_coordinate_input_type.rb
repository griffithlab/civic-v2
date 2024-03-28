module Types::Revisions
  class GeneVariantCoordinateInputType < Types::BaseInputObject
    argument :representative_transcript, String, required: false
    argument :chromosome, String, required: false,
      validates: { inclusion: { allow_null: true, in: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
        '14', '15', '16', '17', '18', '19', '20', '21', '22', 'X', 'Y', 'MT']
    }}
    argument :start, Int, required: false
    argument :stop, Int, required: false
    argument :reference_build, Types::ReferenceBuildType, required: true,
      description: 'The reference build for the genomic coordinates of this Variant.'
    argument :ensembl_version, GraphQL::Types::Int, required: true,
      description: 'The Ensembl database version.'
    argument :reference_bases, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: 'Reference bases for this variant'
    argument :variant_bases, Types::NullableValueInputType.for(GraphQL::Types::String), required: true,
      description: 'Variant bases for this variant'
  end
end
