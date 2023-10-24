class DeprecationValidator < ActiveModel::Validator
  def validate(record)
    if record.deprecated
      if record.evidence_items.where(status: ['submitted', 'accepted']).count > 0
        record.errors.add :deprecated, "Record has linked evidence items"
      end
      if record.assertions.where(status: ['submitted', 'accepted']).count > 0
        record.errors.add :deprecated, "Record has linked assertions"
      end
    end
  end
end
