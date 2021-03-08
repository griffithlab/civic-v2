module Actions
  class RejectRevision
    include Transactional
    include Actions::WithOriginatingOrganization

    attr_reader :revision, :rejecting_user, :organization_id, :comment

    def initialize(revision:, rejecting_user:, organization_id:, comment:)
      @revision = revision
      @rejecting_user = rejecting_user
      @organization_id = organization_id
      @comment = comment
    end

    def execute
      update_revision_status
      create_event
      create_comment
    end

    def update_revision_status
      revision.lock!
      revision.status = 'rejected'
      revision.save
    end

    def create_event
      Event.create!(
        action: 'revision rejected',
        originating_user: rejecting_user,
        subject: revision.subject,
        originating_object: revision,
        organization: resolve_organization(rejecting_user, organization_id)
      )
    end

    def create_comment
      cmd = Actions::AddComment.new(
        title: "",
        body: comment,
        commenter: rejecting_user,
        commentable: revision,
        organization_id: organization_id
      )
      cmd.perform
    end
  end
end
