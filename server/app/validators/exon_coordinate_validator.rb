class ExonCoordinateValidator < ActiveModel::Validator
  include ValidationHelpers

  def validate(record)
    case record.record_state
    when 'stub'
      validate_stub(record)
    when 'exons_provided'
      validate_exons_only(record)
    when 'fully_curated'
      validate_full_record(record)
    else
      raise StandardError.new("Unexpected record state: #{record.record_state}")
    end
  end

  private
    #stub -> everything nullable except variant and coordinate type
    #exons_provided -> exon, representative transcript, reference build, ensembl_version (possibly offset + direction)
    #fully_curated -> everything required except offset + direction
  def validate_stub(record)
    validate_present(record, :coordinate_type)
  end

  def validate_exons_only(record)
    validate_present(record, :coordinate_type)
    validate_present(record, :representative_transcript)
    validate_present(record, :reference_build)
    validate_present(record, :ensembl_version)
    validate_present(record, :exon)
    if record.exon_offset.present?
      validate_present(record, :exon_offset_direction)
    end
  end

  def validate_full_record(record)
    validate_exons_only(record)
    validate_present(record, :chromosome)
    validate_present(record, :strand)
    validate_present(record, :start)
    validate_present(record, :stop)
    validate_present(record, :ensembl_id)
  end
end
