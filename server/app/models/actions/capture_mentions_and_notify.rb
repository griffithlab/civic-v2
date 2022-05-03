module Actions
  class CaptureMentionsAndNotify
    include Actions::Transactional
    attr_reader :comment, :event

    def initialize(comment, event)
      @comment = comment
      @event = event
    end

    def execute
      capture_mentions
      notify_users
    end

    def capture_mentions
      mentions = Actions::ExtractMentions.new(comment.comment)
        .perform
      mentions.mentioned_users.each do |user|
        UserMention.create!(comment: comment, user: user)
      end

      mentions.mentioned_roles.each do |role|
        RoleMention.create!(comment: comment, role: role)
      end

      Actions::ExtractReferences.new(comment.comment)
        .perform
        .referenced_items.each do |entity|
        EntityMention.create!(comment: comment, entity: entity)
      end
    end

    def notify_users
      mentioned_by_name = User.joins(:comment_mentions).where("user_mentions.comment_id = ?", comment.id)
      mentioned_by_role = RoleMention.where(comment: comment).flat_map do |m|
                              User.where("users.role >= ?", User.roles[m.role])
                          end

      users_to_notify = mentioned_by_name + mentioned_by_role

      users_to_notify.uniq.each do |user|
        Notification.where(
          type: :mention,
          originating_user: comment.user,
          notified_user: user,
          event: event
        ).first_or_create! unless user == comment.user
      end
    end
  end
end
