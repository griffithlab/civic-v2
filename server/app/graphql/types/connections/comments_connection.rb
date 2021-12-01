module Types::Connections
  class CommentsConnection < Types::BaseConnection
    attr_reader :comment_subject 

    description 'Connection type for objects with comments including additional metadata.'

    field :unique_commenters, [Types::Entities::UserType], null: false,
      description: 'List of all users that have commented on this entity.'

    field :mentioned_users, [Types::Entities::UserType], null: false,
      description: 'List of users mentioned in this comment thread.'

    field :mentioned_roles, [Types::Commentable::CommentTagSegment], null: false,
      description: 'List of roles mentioned in this comment thread'

    field :mentioned_entities, [Types::Commentable::CommentTagSegment], null: false,
      description: 'List of entities mentioned in this comment thread.'

    def unique_commenters
      User.where(id: comment_scope.select(:user_id)).distinct
    end

    def mentioned_users
      User.joins(:comment_mentions).where(
        comment_mentions: { comment: comment_scope }
      ).distinct
    end

    def mentioned_roles
      RoleMention.where(comment: comment_scope)
        .distinct
        .pluck(:role)
        .map do |r|
          {
            entity_id: User.roles[r],
            display_name: r,
            tag_type: 'ROLE'
          }
        end
    end

    def mentioned_entities
      EntityMention.includes(:entity)
        .group(:entity_type, :entity_id)
        .select(:entity_type, :entity_id)
        .where(comment: comment_scope)
        .map do |ref|
          {
            entity_id: ref.entity.id,
            display_name: ref.entity.name,
            tag_type: ref.entity.class.to_s.underscore.upcase
          }
        end
    end

    private
    def comment_scope
      @comment_subject ||= object.arguments[:subject]

      if comment_subject
        Comment.where(commentable: comment_subject)
      elsif parent
        parent.comments
      else
        Comment.all
      end
    end
  end
end
