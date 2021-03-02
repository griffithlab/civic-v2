module Actions
  class AddComment
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :comment, :commenter, :originating_user, :commentable,
      :subject, :title, :body, :event, :organization_id

    def initialize(title, body, commenter, commentable, organization_id)
      @title = title
      @body = body
      @commenter = commenter
      @originating_user = commenter
      @commentable = commentable
      @subject = commentable
      @organization_id = organization_id
    end

    private
    def execute
      create_comment
      @event = Event.create(
        action: 'change suggested',
        originating_user: originating_user,
        subject: subject,
        organization: resolve_organization(originating_user, organization_id)
      )
      #handle_mentions
      #subscribe_user
    end

    def create_comment
      @comment = Comment.new(title: title, text: body)
      comment.user = commenter
      comment.commentable = commentable
      comment.save
    end

    def handle_mentions
      NotifyMentioned.perform_later(comment.text, comment.user, event)
    end

    def subscribe_user
      commentable.subscribe_user(commenter)
    end

    def state_params
      { comment: { id: comment.id } }
    end
  end
end
