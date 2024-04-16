class Actions::SuggestRevisionSet
  include Actions::Transactional

  attr_reader :existing_obj, :updated_obj, :originating_user, :organization_id, :revision_results, :revisions, :revision_set, :revisionset_id

  def initialize(existing_obj:, updated_obj:, originating_user:, organization_id:)
    @existing_obj = existing_obj
    @updated_obj = updated_obj
    @originating_user = originating_user
    @organization_id = organization_id
    @revisionset_id = SecureRandom.uuid
    @revisions = []
    @revision_results = []
  end

  def execute
    updated_obj.in_revision_validation_context = true
    updated_obj.revision_target_id = existing_obj.id
    updated_obj.validate!

    any_changes = false

    @revision_set = RevisionSet.create!()

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

      subject = if existing_obj.kind_of?(IsFeatureInstance)
        existing_obj.feature
      else
        existing_obj
      end

      cmd = Actions::SuggestRevision.new(
        subject: subject,
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
        raise StandardError.new(res.errors.join(','))
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

    unless any_changes
      raise StandardError.new("You must change at least one field in order to suggest a revision.")
    end
  end
end

