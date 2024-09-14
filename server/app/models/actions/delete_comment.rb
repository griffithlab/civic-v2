module Actions
  class DeleteComment
    include Actions::Transactional
    attr_reader :comment, :originating_user, :organization_id

    def initialize(comment:, originating_user:, organization_id: nil)
      @originating_user = originating_user
      @comment = comment
      @organization_id = organization_id
    end

    private
    def execute
      mark_deleted
      event = Event.new(
        action: 'comment deleted',
        originating_user: originating_user,
        subject: comment.commentable,
        organization_id: organization_id,
        originating_object: comment
      )
      events << event
    end

    def mark_deleted
      comment.deleted_at = DateTime.now
      comment.save!
    end
  end
end
