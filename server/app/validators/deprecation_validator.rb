class DeprecationValidator < ActiveModel::Validator
  def validate(record)
    if record.deprecated
      if record.evidence_items.where(status: [ "submitted", "accepted" ]).count > 0
        record.errors.add :deprecated, "Record has one or more linked evidence items. Please revise them to no longer use this record before deprecating."
      end
      if record.class != Source
        if record.assertions.where(status: [ "submitted", "accepted" ]).count > 0
          record.errors.add :deprecated, "Record has one or more linked assertions. Please revise them to no longer use this record before deprecating."
        end
      end
      entity_type_to_field_names(record).each do |field_name|
        revisions = Revision.where(field_name: field_name, status: "new").select { |r| Array(r.suggested_value).include?(record.id) }
        if revisions.count > 0
          record.errors.add :deprecated, "One or more open revisions suggest this record as a value. The subject of these revisions are: #{revisions.map { |r| "#{r.subject_type}:#{r.subject_id}" }.uniq.join(", ")}. Please close these revisions before deprecating the record."
        end
      end
      if record.class == Source
        if record.features.where(deprecated: false).count > 0
          record.errors.add :deprecated, "Record has one or more linked features. Please revise them to no longer use this record before deprecating."
        end
        if record.molecular_profiles.where(deprecated: false).count > 0
          record.errors.add :deprecated, "Record has one or more linked molecular profiles. Please revise them to no longer use this record before deprecating."
        end
        if record.variant_groups.count > 0
          record.errors.add :deprecated, "Record has one or more linked variant groups. Please revise them to no longer use this record before deprecating."
        end
      end
    end
  end

  def entity_type_to_field_names(record)
    case record
    when Disease
      [ "disease_id" ]
    when Therapy
      [ "therapy_ids" ]
    when Source
      [ "source_id", "source_ids" ]
    else
      raise "No mapped field_name for class #{record.class.name}"
    end
  end
end
