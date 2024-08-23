module Activities
  class DeleteComment < Base
    attr_reader :comment

    def initialize(comment:, originating_user:, organization_id:)
      super(organization_id: organization_id, user: originating_user)
      @comment = comment
    end

    private
    def create_activity
      @activity = DeleteCommentActivity.create!(
        subject: comment,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::DeleteComment.new(
        comment: comment,
        originating_user: user,
        organization_id: organization&.id
      )

      cmd.perform

      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end

      events << cmd.events
    end

    def linked_entities
      comment
    end
  end
end
