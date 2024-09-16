module Types::Fusion
  class FusionVariantInputType < Types::BaseInputObject
    description 'The fields required to create a fusion variant'

    argument :five_prime_transcript, String, required: false
    argument :five_prime_exon_end, Int, required: false
    argument :five_prime_offset, Int, required: false
    argument :five_prime_offset_direction, Types::Fusion::Direction, required: false

    argument :three_prime_transcript, String, required: false
    argument :three_prime_exon_start, Int, required: false
    argument :three_prime_offset, Int, required: false
    argument :three_prime_offset_direction, Types::Fusion::Direction, required: false

    argument :reference_build, Types::ReferenceBuildType, required: false,
      description: 'The reference build for the genomic coordinates of this Variant.'

    argument :ensembl_version, Int, required: true

    def prepare
      five_prime_coords = if five_prime_transcript.present?
                            ExonCoordinate.new(
                              coordinate_type: 'Five Prime End Exon Coordinate',
                              reference_build: reference_build,
                              ensembl_version: ensembl_version,
                              representative_transcript: five_prime_transcript&.strip,
                              exon: five_prime_exon_end,
                              exon_offset: five_prime_offset,
                              exon_offset_direction: five_prime_offset_direction,
                              record_state: 'exons_provided'
                            )
                          else
                            nil
                          end

      three_prime_coords = if three_prime_transcript.present? 
                             ExonCoordinate.new(
                               coordinate_type: 'Three Prime Start Exon Coordinate',
                               reference_build: reference_build,
                               ensembl_version: ensembl_version,
                               representative_transcript: three_prime_transcript&.strip,
                               exon: three_prime_exon_start,
                               exon_offset: three_prime_offset,
                               exon_offset_direction: three_prime_offset_direction,
                               record_state: 'exons_provided'
                             )
                           else
                             nil
                           end


      {
        five_prime_coords: five_prime_coords,
        three_prime_coords: three_prime_coords
      }

    end
  end
end
