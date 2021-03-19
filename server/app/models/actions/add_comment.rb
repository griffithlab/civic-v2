module Actions
  class AddComment
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :comment, :commenter, :originating_user, :commentable,
      :subject, :title, :body, :event, :organization_id, :subscribe_user

    def initialize(title: nil, body:, commenter:, commentable:, organization_id: nil, subscribe_user: true)
      @title = title
      @body = body
      @commenter = commenter
      @originating_user = commenter
      @commentable = commentable
      @subject = commentable
      @organization_id = organization_id
      @subscribe_user = subscribe_user
    end

    private
    def execute
      create_comment
      @event = Event.create!(
        action: 'commented',
        originating_user: originating_user,
        subject: subject,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: comment
      )
      #handle_mentions
      subscribe_user_to_commentable if subscribe_user
    end

    def create_comment
      @comment = Comment.create!(
        title: title,
        text: body,
        user: commenter,
        commentable: commentable,
      )
    end

    def handle_mentions
      NotifyMentioned.perform_later(comment.text, comment.user, event)
    end

    def subscribe_user_to_commentable
      SubscribeUser.perform_later(commentable, commenter, subscribe_to_children: false)
    end
  end
end
