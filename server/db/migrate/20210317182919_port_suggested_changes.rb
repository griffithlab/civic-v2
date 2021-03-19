class PortSuggestedChanges < ActiveRecord::Migration[6.1]

  def up
    change_column_null :revisions, :current_value, true
    change_column_null :revisions, :suggested_value, true

    revision_id_mapping = {}

    SuggestedChange.find_each do |sc|
      created_revision = false
      revisionset_id = SecureRandom.uuid
      events = Event.where(subject:  sc.moderated)
        .where("events.action like 'revision %'")
        .select { |e| e.state_params.present? && e.state_params.dig('suggested_change', 'id') == sc.id }

      originating_event =  events.select {|e| e.action == 'revision suggested' }

      originating_organization_id = if originating_event.size == 1
                          originating_event.first.organization_id
                        elsif originating_event.size == 0
                          if sc.user&.organizations.size == 1
                            sc.user.organizations.first.id
                          else
                            nil
                          end
                        else
                          raise StandardError.new('we shouldnt get here')
                        end

      originating_comment = sc.comments.first
      extra_comments = sc.comments[1..-1]

      sc.suggested_changes.each do |k, v|
        next if v.first.nil? && v.last.blank?
        r = Revision.create!(
          current_value: v.first,
          suggested_value: v.last,
          subject: sc.moderated,
          created_at: sc.created_at,
          status: sc.status,
          field_name: k,
          revisionset_id: revisionset_id
        )
        if created_revision == false
          created_revision = true
          revision_id_mapping[sc.id] = r.id
        end


        events.each do |e|
          org_id = if e.organization_id.nil? && e.action == 'revision suggested' && originating_organization_id.present?
                     originating_organization_id
                   elsif originating_organization_id.nil? && e.originating_user.organizations.size > 1
                     e.originating_user.organizations.first.id
                   else
                     e.organization_id
                   end

          Event.create!(
            action: e.action,
            created_at: e.created_at,
            originating_user_id: e.originating_user_id,
            subject: sc.moderated,
            organization_id: org_id,
            user_role: e.user_role,
            originating_object: r
          )
        end

        sc.comments.each do |comment|
          should_subscribe = Subscription.where(user: comment.user, subscribable: sc).exists?

          org_id = if comment.id == originating_comment.id && originating_organization_id.present?
                     originating_organization_id
                   elsif originating_organization_id.nil? && comment.user.organizations.size > 1
                     comment.user.organizations.first.id
                   else
                     Event.where(action: 'commented', subject: sc, originating_user: comment.user).first&.organization_id
                   end

          cmd = Actions::AddComment.new(
            title: comment.title,
            body: comment.text,
            commenter: comment.user,
            commentable: r,
            subscribe_user: should_subscribe,
            organization_id: org_id
          )
          res = cmd.perform
          if res.errors.any?
            raise StandardError.new(res.errors.join("\n"))
          end

          res.event.created_at = comment.created_at
          res.event.save
          res.comment.created_at = comment.created_at
          res.comment.save
        end
      end

      sc.comments.destroy_all
      subs_to_delete = Subscription.where(subscribable: sc)
      Notification.where(subscription: subs_to_delete).destroy_all
      Notification.where(event_id: events.map(&:id)).destroy_all
      subs_to_delete.destroy_all
      events.each(&:destroy)
      sc.destroy
    end

    event_ids = Event.where(subject_type: 'SuggestedChange').pluck(:id)
    Notification.where(event_id: event_ids).destroy_all
    Event.where(id: event_ids).destroy_all

    regex = Regexp.new(/#R(\d+)\b/)
    Comment.where("comments.comment like '%#R%'").find_each do |c|
      rids = c.comment.scan(regex)
      rids.each do |id|
        new_id = revision_id_mapping[Integer(id.first)]
        c.comment.gsub("#R#{id.first}", "#R#{new_id}")
        c.save
      end
    end

  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
