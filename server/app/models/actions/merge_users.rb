module Actions
  class MergeUsers
    include Actions::Transactional
    attr_reader :remaining_user, :subsumed_user

    def initialize(remaining_user_id:, subsumed_user_id:)
      @remaining_user = User.find(remaining_user_id)
      @subsumed_user = User.find(subsumed_user_id)
    end

    private
    def execute
      transfer_comments
      transfer_subscriptions
      transfer_roles
      transfer_authorizations
      transfer_events
      transfer_notifications
      transfer_revisions
      transfer_suggested_changes
      remove_old_user
    end


    def transfer_comments
      Comment.where(user: subsumed_user).find_each do |c|
        c.user = remaining_user
        c.save!
      end
    end
  end
end
