module Actions
  class MergeAccounts
    include Actions::Transactional

    attr_reader :account_to_keep, :account_to_merge, :old_account_id

    def initialize(account_id_to_keep:, account_id_to_merge_in:)
      @account_to_keep = User.find(account_id_to_keep)
      @old_account_id = account_id_to_merge_in
      @account_to_merge = User.find(account_id_to_merge_in)
    end

    def execute
      move_authorizations
      move_activities
      move_events
      move_comments
      move_flags
      move_subscriptions
      move_notifications
      merge_roles
      move_mentions
      move_source_suggestions
      merge_organizations
      move_legacy_changes
      account_to_keep.save!
      account_to_merge.destroy!
    end

    private
    def move_authorizations
      auths = Authorization.where(user_id: old_account_id)
      auths.each do |a|
        a.user_id = account_to_keep.id
        a.save!
      end
    end

    def move_activities
      activities = Activity.where(user_id: old_account_id)
      activities.each do |a|
        a.user_id = account_to_keep.id
        a.save!
      end
    end

    def move_events
      events = Event.where(originating_user_id: old_account_id)
      events.each do |e|
        e.originating_user_id = account_to_keep.id
        e.save!
      end
    end

    def move_comments
      comments = Comment.where(user_id: old_account_id)
      comments.each do |c|
        c.user_id = account_to_keep.id
        c.save!
      end
    end

    def move_flags
      flagging = Flag.where(flagging_user_id: old_account_id)
      flagging.each do |f|
        f.flagging_user_id = account_to_keep.id
        f.save!
      end

      resolving = Flag.where(resolving_user_id: old_account_id)
      resolving.each do |f|
        f.resolving_user_id = account_to_keep.id
        f.save!
      end
    end

    def move_subscriptions
      subs = Subscription.where(user_id: old_account_id)
      subs.each do |s|
        if Subscription.where(subscribable: s.subscribable, user_id: account_to_keep.id).exists?
          s.destroy!
        else
          s.user_id = account_to_keep.id
          s.save!
        end
      end
    end

    def move_notifications
      notified = Notification.where(notified_user_id: old_account_id)
      notified.each do |n|
        if Notification.where(event_id: n.event_id, notified_user_id: account_to_keep.id).exists?
          n.destroy!
        else
          n.notified_user_id = account_to_keep.id
          n.save!
        end
      end

      notifier = Notification.where(originating_user_id: old_account_id)
      notifier.each do |n|
        if Notification.where(event_id: n.event_id, originating_user_id: account_to_keep.id).exists?
          n.destroy!
        else
          n.originating_user_id = account_to_keep.id
          n.save!
        end
      end
    end

    def move_mentions
      mentions = UserMention.where(user_id: old_account_id)
      mentions.each do |m|
        if UserMention.where(user_id: account_to_keep.id, comment_id: m.comment_id)
          m.destroy!
        else
          m.user_id = account_to_keep.id
          m.save!
        end
      end
    end

    def merge_roles
      account_to_keep.role = Role.highest_role_for_users(account_to_keep, account_to_merge)
    end

    def move_source_suggestions
      suggestions = SourceSuggestion.where(user_id: old_account_id)
      suggestions.each do |s|
        s.user_id = account_to_keep.id
        s.save!
      end
    end

    def merge_organizations
      orgs_to_add = account_to_merge.organizations
      account_to_merge.organizations = []
      existing_orgs = account_to_keep.organizations
      all_orgs = orgs_to_add + existing_orgs
      account_to_keep.organizations = all_orgs.uniq
    end

    class SuggestedChange < ActiveRecord::Base; end
    def move_legacy_changes
      changes = SuggestedChange.where(user_id: old_account_id)
      changes.each do |sc|
        sc.user_id = account_to_keep.id
        sc.save!
      end
    end
  end
end
