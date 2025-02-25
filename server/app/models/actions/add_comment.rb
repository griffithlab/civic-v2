module Actions
  class AddComment
    include Actions::Transactional
    attr_reader :comment, :commenter, :originating_user, :commentable,
      :subject, :title, :body, :organization_id

    def initialize(title: nil, body:, commenter:, commentable:, organization_id: nil)
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
      event = Event.new(
        action: "commented",
        originating_user: originating_user,
        subject: subject,
        organization_id: organization_id,
        originating_object: comment
      )
      events << event
      subscribe_user
    end

    def create_comment
      @comment = Comment.create!(
        title: title,
        text: body,
        user: commenter,
        commentable: commentable,
      )
    end

    def subscribe_user
      SubscribeUser.perform_later(commentable, commenter, subscribe_to_children: false)
    end
  end
end
