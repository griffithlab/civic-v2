class DeprecationValidator < ActiveModel::Validator
  def validate(record)
    if record.deprecated
      if record.evidence_items.where(status: ['submitted', 'accepted']).count > 0
        record.errors.add :deprecated, "Record has one or more linked evidence items. Please revise them to no longer use this record before deprecating."
      end
      if record.assertions.where(status: ['submitted', 'accepted']).count > 0
        record.errors.add :deprecated, "Record has one or more linked assertions. Please revise them to no longer use this record before deprecating."
      end
      revisions = Revision.where(field_name: entity_type_to_field_name(record), status: 'new').select{|r| Array(r.suggested_value).include?(record.id)}
      if revisions.count > 0
        record.errors.add :deprecated, "One or more open revisions suggest this record as a value. The subject of these revisions are: #{revisions.map { |r| "#{r.subject_type}:#{r.subject_id}"}.uniq.join(", ")}. Please close these revisions before deprecating the record."
      end
    end
  end

  def entity_type_to_field_name(record)
    case record
    when Disease
       'disease_id'
    when Therapy
       'therapy_ids'
    else
      raise "No mapped field_name for class #{record.class.name}"
    end
  end
end
