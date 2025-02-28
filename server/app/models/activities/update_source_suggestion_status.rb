module Activities
  class UpdateSourceSuggestionStatus < Base
    attr_reader :source_suggestion, :new_status, :reason

    def initialize(originating_user:, source_suggestion:, organization_id: nil, new_status:, reason:)
      super(organization_id: organization_id, user: originating_user)
      @source_suggestion = source_suggestion
      @new_status = new_status
      @reason = reason
    end

    private
    def create_activity
      @activity = UpdateSourceSuggestionStatusActivity.create!(
        subject: source_suggestion.source,
        user: user,
        organization: organization,
        note: reason
      )
    end

    def call_actions
      cmd = Actions::UpdateSourceSuggestionStatus.new(
        updating_user: user,
        source_suggestion: source_suggestion,
        organization_id: organization&.id,
        new_status: new_status,
        reason: reason
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
    end

    def linked_entities
      [ source_suggestion ]
    end
  end
end
