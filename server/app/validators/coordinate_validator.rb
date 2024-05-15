class CoordinateValidator < ActiveModel::Validator
  def validate(record)
    case record.coordinate_type
    when 'Gene Variant Coordinate'
      validate_gene_variant_coordinates(record)
    when 'Five Prime Fusion Coordinate'
      validate_fusion_variant_coordinates(record)
    when 'Three Prime Fusion Coordinate'
      validate_fusion_variant_coordinates(record)
    else
      raise StandardError.new("Unsupported coordinate type: #{record.coordinate_type}")
    end
  end

  private
  def validate_gene_variant_coordinates(record)
    validate_not_present(record, :exon_boundary)
    validate_not_present(record, :exon_offset)
    require_transcript_and_build_for_coords
  end

  def validate_fusion_variant_coordinates(record)
    require_transcript_and_build_for_coords

    if record.exon_offset.present?
      validate_present(record, :exon_boundary, "You must specify an exon boundary if you supply an offset value")
    end

    if record.exon_boundary.present?
      validate_present(record, :transcript, "You must specify a transcript if you supply an exon boundary")
    end
  end

  def require_transcript_and_build_for_coords
    #if any of these are set
    if [:chromosome, :start, :stop].map { |field| record.send(field) }.any?(&:present?)
      validate_present(record, :reference_build, "You must specify a reference_build if you supply coordinate information")
      validate_present(record, :transcript, "You must specify a transcript if you supply coordinate information")
    end
  end

  def validate_not_present(record, field, msg = "#{field} is not allowed on #{record.coordinate_type}")
    if record.send(field).present?
      record.errors.add(field, msg)
    end
  end

  def validate_present(record, field, msg = "#{field} is required on #{record.coordinate_type}")
    if record.send(field).blank?
      record.errors.add(field, msg)
    end
  end
end
