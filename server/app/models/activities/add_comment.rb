module Activities
  class AddComment < Base
    attr_reader :comment, :subject

    def initialize(subject:, originating_user:, organization_id:, body:, title: '')
      super(organization_id: organization_id, user: originating_user, comment_body: body, comment_title: title)
      @subject = subject
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
      #no op, handled in base class
    end

    def commentable
      subject
    end

    def linked_entities
      comment
    end
  end
end
