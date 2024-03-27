class CoordinateValidator < ActiveModel::Validator
  def validate(record)
    case record.coordinate_type
    when 'Gene Variant Coordinate'
      validate_gene_variant_coordinates(record)
    else
      raise StandardError.new("Unsupported coordinate type: #{record.coordinate_type}")
    end
  end

  private
  def validate_gene_variant_coordinates(record)
    validate_not_present(record, :exon_boundary)
    validate_not_present(record, :exon_offset)
  end

  def validate_not_present(record, field)
    if record.send(field).present?
      record.errors.add(field, "#{field} is not allowed on #{record.coordinate_type}")
    end
  end
end
