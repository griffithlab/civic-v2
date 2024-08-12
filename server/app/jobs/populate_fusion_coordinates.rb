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
  rescue StandardError => e
    flag_variant(variant, e.message)
    raise StandardError.new(e.message)
  end

  def populate_coords(coords, secondary_coordinates)
    if coords.present? && coords.representative_transcript.present?
      (exon, highest_exon) = get_exon_for_transcript(coords.representative_transcript, coords.exon)
      populate_exon_coordinates(coords, exon)

      if coords.coordinate_type =~ /Five Prime/
        (secondary_exon, _) = get_exon_for_transcript(secondary_coordinates.representative_transcript, 1)
        populate_exon_coordinates(secondary_coordinates, secondary_exon)
      else
        (secondary_exon, _) = get_exon_for_transcript(secondary_coordinates.representative_transcript, highest_exon)
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

    max_exon_on_transcript = exons.select { |e| e['Parent'] == t }
      .max_by { |e| e['rank'] }
      .fetch('rank')

    [exon.first, max_exon_on_transcript]
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

    #strand
  end

  def populate_representative_coordinates(coordinate, start_exon_coordinates, end_exon_coordinates)
    coordinate.chromosome = start_exon_coordinates.chromosome
    coordinate.representative_transcript = start_exon_coordinates.representative_transcript
    coordinate.ensembl_version = start_exon_coordinates.ensembl_version
    coordinate.reference_build = start_exon_coordinates.reference_build

    if start_exon_coordinates.strand == 'positive'
      coordinate.start = calculate_offset(start_exon_coordinates.start, start_exon_coordinates)
      coordinate.stop = calculate_offset(end_exon_coordinates.stop, end_exon_coordinates)
    else
      coordinate.start = calculate_offset(end_exon_coordinates.start, end_exon_coordinates)
      coordinate.stop = calculate_offset(start_exon_coordinates.stop, start_exon_coordinates)
    end
    coordinate.record_state = 'fully_curated'
    coordinate.save!
  end

  def calculate_offset(pos, coords)
    if coords.exon_offset.blank?
      pos
    elsif coords.exon_offset_direction == 'positive'
      pos + coords.exon_offset
    else
      pos - coords.exon_offset
    end
  end

  def flag_variant(variant, error_message)
    existing_flag = variant.flags.includes(:open_activity)
      .where(state: 'open')
      .select { |f| f.open_activity.note == error_message && f.open_activity.user_id == Constants::CIVICBOT_USER_ID }
      .any?

    if !existing_flag
      civicbot_user = User.find(Constants::CIVICBOT_USER_ID)

     cmd = Activities::FlagEntity.new(
        flagging_user: civicbot_user,
        flaggable: variant,
        organization_id: nil,
        note: error_message
      ).perform
    end
  end
end

