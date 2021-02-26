class Actions::SuggestChangeSet
  include Actions::Transactional

  attr_reader :existing_obj, :fields, :originating_user, :organization_id, :changes

  def initialize(existing_obj:, fields:, originating_user:, organization_id:)
    @existing_obj = existing_obj
    @fields = fields
    @originating_user = originating_user
    @organization_id = organization_id
    @changes = []
  end

  def execute
    any_changes = false

    editable_fields.each do |field_name|

      current_value = existing_obj.send(field_name)
      suggested_value = fields.send(field_name)

      change_present = if current_value.is_a?(Array)
                        current_value.sort != suggested_value.sort
                       else
                        current_value != suggested_value
                       end


      next unless change_present
      any_changes = true

      cmd = Actions::SuggestChange.new(
        subject: existing_obj,
        field_name: field_name,
        current_value: current_value,
        suggested_value: suggested_value,
        originating_user: originating_user,
        organization_id: organization_id
      )
      res = cmd.perform

      if res.errors.any?
        raise StandardError.new(res.errors.join(','))
      else
        changes << {
          id: res.suggested_change.id,
          field_name: res.suggested_change.field_name,
          newly_created: res.change_created?
        }
      end

    end

    unless any_changes
      raise StandardError.new("You must change at least one field in order to suggest a change")
    end
  end

  def editable_fields
    raise StandardError.new('Implement in subclass!')
  end
end

