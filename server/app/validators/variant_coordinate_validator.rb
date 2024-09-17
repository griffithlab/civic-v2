class VariantCoordinateValidator < ActiveModel::Validator
  include ValidationHelpers

  def validate(record)
    if record.record_state == 'stub'
      validate_stub(record)
    else
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
  end

  private
  def validate_stub(record)
    validate_present(record, :coordinate_type)
  end

  def validate_gene_variant_coordinates(record)
    require_genomic_position_fields(record)
  end

  def validate_fusion_variant_coordinates(record)
    require_genomic_position_fields(record)
  end

  def require_genomic_position_fields(record)
    validate_present(record, :chromosome)
    validate_present(record, :start)
    validate_present(record, :stop)
    validate_present(record, :reference_build, "You must specify a reference_build if you supply coordinate information")
    validate_present(record, :representative_transcript, "You must specify a transcript if you supply coordinate information")
    if record.stop.present? && record.start.present? && record.start > record.stop
      record.errors.add(:start, "Start coordinate must be before Stop coordinate")
    end
  end
end
