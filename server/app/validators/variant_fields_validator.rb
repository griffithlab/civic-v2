class VariantFieldsValidator < ActiveModel::Validator
  def validate(record)
    record.required_fields.each do |field|
      if record.send(field).blank?
        record.errors.add field, "#{field} is required but not provided"
      end
    end

    record.forbidden_fields.each do |field|
      if record.send(field).present?
        record.errors.add field, "#{field} is not allowed on this Variant type"
      end
    end
  end
end
