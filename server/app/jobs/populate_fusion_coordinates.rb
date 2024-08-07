class PopulateFusionCoordinates < ApplicationJob
  def perform(variant)
    unless variant.is_a?(Variants::FusionVariant)
      return
    end

    if variant.fusion.five_prime_partner_status == 'known'
      populate_coords(variant.five_prime_end_exon_coordinates, variant.five_prime_start_exon_coordinates)
      populate_representative_coordinates(variant.five_prime_coordinates, variant.five_prime_start_exon_coordinates, variant.five_prime_end_exon_coordinates)
    end
    if variant.fusion.three_prime_partner_status == 'known'
      populate_coords(variant.three_prime_start_exon_coordinates, variant.three_prime_end_exon_coordinates)
      populate_representative_coordinates(variant.three_prime_coordinates, variant.three_prime_start_exon_coordinates, variant.three_prime_end_exon_coordinates)
    end
  end

  def populate_coords(coords, secondary_coordinates)
    if coords.present? && coords.representative_transcript.present?
      exon = get_exon_for_transcript(coords.representative_transcript, coords.exon)
      (strand, highest_exon) = populate_exon_coordinates(coords, exon)

      if strand == '1'
        secondary_exon = get_exon_for_transcript(secondary_coordinates.representative_transcript, 1)
        populate_exon_coordinates(secondary_coordinates, secondary_exon)
      else
        secondary_exon = get_exon_for_transcript(secondary_coordinates.representative_transcript, highest_exon)
        populate_exon_coordinates(secondary_coordinates, secondary_exon)
      end
    end

  end

  def get_exon_for_transcript(transcript, exon_number)
    res = Scrapers::EnsemblApiHelpers.get_exons_for_ensembl_id(transcript)
    if res.error
      raise StandardError.new(res.error)
    end
    if res.warning
      raise StandardError.new(res.warning)
    end

    exons = res.value
    t = transcript.split('.').first
    exon = exons.select { |e| e['rank'] == exon_number && e['Parent'] == t }

    if exon.size > 1
      raise StandardError.new("Ambiguous Exon")
    elsif exon.size == 0
      raise StandardError.new("No Exons Found")
    end

    exon.first
  end

  def populate_exon_coordinates(coordinates, exon)
    strand = if exon['strand'] == -1
               'negative'
             else
               'positive'
             end

    coordinates.chromosome = exon['seq_region_name']
    coordinates.start = exon['start']
    coordinates.stop = exon['end']
    coordinates.strand = strand
    coordinates.ensembl_id = exon['id']
    coordinates.record_state = 'fully_curated'
    coordinates.save!

    [strand, exon['rank']]
  end

  def populate_representative_coordinates(coordinate, start_exon_coordinates, end_exon_coordinates)
    if start_exon_coordinates.strand == '1'
      coordinate.start = start_exon_coordinates.start
      coordinate.stop = end_exon_coordinates.stop
    else
      coordinate.start = end_exon_coordinates.stop
      coordinate.stop = start_exon_coordinates.start
    end
    coordinate.record_state = 'fully_curated'
    coordinate.save!
  end
end
