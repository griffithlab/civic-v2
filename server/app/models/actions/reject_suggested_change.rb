module Actions
  class RejectSuggestedChange
    include Transactional
    include Actions::WithOriginatingOrganization

    attr_reader :suggested_change, :rejecting_user, :organization_id, :comment

    def initialize(suggested_change:, rejecting_user:, organization_id:, comment:)
      @suggested_change = suggested_change
      @rejecting_user = rejecting_user
      @organization_id = organization_id
      @comment = comment
    end

    def execute
      update_change_status
      create_event
      create_comment
    end

    def update_change_status
      suggested_change.lock!
      suggested_change.status = 'rejected'
      suggested_change.save
    end

    def create_event
      Event.create!(
        action: 'change rejected',
        originating_user: rejecting_user,
        subject: suggested_change.subject,
        originating_object: suggested_change,
        organization: resolve_organization(rejecting_user, organization_id)
      )
    end

    def create_comment
      cmd = Actions::AddComment.new(
        title: "",
        body: comment,
        commenter: rejecting_user,
        commentable: suggested_change,
        organization_id: organization_id
      )
      cmd.perform
    end
  end
end
