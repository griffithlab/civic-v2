module Actions
  class ProcessCommentBody
    attr_reader :comment

    def initialize(comment)
      @comment = comment
    end

    def perform
      handle_mentions
      handle_references
    end

    private
    def handle_mentions
      cmd = Actions::ExtractMentions.new(comment.comment).perform
      # TODO save valid mentioned users/references/ in the db
      mentioned_users = cmd.mentioned_users
      # TODO notify mentioned users/roles/orgs
    end

    def handle_references
      cmd = Actions::ExtractReferences.new(comment.comment).perform
      # TODO save valid mentioned entities in the db
      referenced_entities = cmd.referenced_entities
    end
  end
end
