class Actions::SuggestRevisionSet
  include Actions::Transactional

  attr_reader :revised_objects, :originating_user, :organization_id, :revision_results, :revisions, :revision_set, :revisionset_id, :event_subject

  def initialize(revised_objects:, originating_user:, organization_id:, event_subject:)
    @revised_objects = Array(revised_objects)
    @event_subject = event_subject
    @originating_user = originating_user
    @organization_id = organization_id
    @revisionset_id = SecureRandom.uuid
    @revisions = []
    @revision_results = []
  end

  def execute
    @revision_set = RevisionSet.create!()
    any_changes = false

    revised_objects.each do |ro|
      existing_obj = ro.existing_obj
      updated_obj = ro.updated_obj
      updated_obj.in_revision_validation_context = true
      updated_obj.revision_target_id = existing_obj.id
      updated_obj.validate!

      existing_obj.editable_fields.each do |field_name|
        current_value = existing_obj.send(field_name)
        suggested_value = updated_obj.send(field_name)

        change_present = if current_value.is_a?(Array)
                           current_value.sort != suggested_value.sort
        else
                           current_value != suggested_value
        end


        next unless change_present
        any_changes = true

        revision_subject = if existing_obj.kind_of?(IsFeatureInstance)
                             existing_obj.feature
        else
                             existing_obj
        end

        cmd = Actions::SuggestRevision.new(
          revision_subject: revision_subject,
          event_subject: event_subject,
          field_name: field_name,
          current_value: current_value,
          suggested_value: suggested_value,
          originating_user: originating_user,
          organization_id: organization_id,
          revisionset_id: revisionset_id,
          revision_set_id: revision_set.id
        )
        res = cmd.perform

        if res.errors.any?
          raise StandardError.new(res.errors.join(","))
        else
          revisions << res.revision
          revision_results << {
            id: res.revision.id,
            field_name: res.revision.field_name,
            newly_created: res.revision_created?,
            revision_set_id: revision_set.id,
          }
          res.events.each { |e| events << e }
        end
      end
    end

    unless any_changes
      raise StandardError.new("You must change at least one field in order to suggest a revision.")
    end

    if revision_results.none? { |r| r[:newly_created] }
      raise StandardError.new("All proposed revisions already exist. Please review them or suggest unique changes.")
    end
  end
end
