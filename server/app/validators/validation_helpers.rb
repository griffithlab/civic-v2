module ValidationHelpers
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
