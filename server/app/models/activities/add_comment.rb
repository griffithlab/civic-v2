module Activities
  class AddComment < Base
    attr_reader :comment, :subject, :body, :title

    def initialize(subject:, originating_user:, organization_id:, body:, title: "")
      super(organization_id: organization_id, user: originating_user)
      @subject = subject
      @body = body
      @title = title
    end

    private
    def create_activity
      @activity = CommentActivity.create!(
        subject: subject,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      cmd = Actions::AddComment.new(
        title: title,
        body: body,
        commenter: user,
        commentable: subject,
        organization_id: organization&.id
      )

      cmd.perform

      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end

      @comment = cmd.comment
      events << cmd.events
    end

    def linked_entities
      comment
    end

    def after_completed
      ::CaptureMentionsAndNotify.perform_later(comment, events.first)
    end
  end
end
