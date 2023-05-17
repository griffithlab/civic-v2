module Actions
  class RejectRevisions
    include Transactional
    include Actions::WithOriginatingOrganization

    attr_reader :revisions, :rejecting_user, :organization_id, :comment

    def initialize(revisions:, rejecting_user:, organization_id:, comment:)
      @revisions = revisions
      @rejecting_user = rejecting_user
      @organization_id = organization_id
      @comment = comment
    end

    def execute
      revisions.each do |revision|
        update_revision_status(revision)
        create_event(revision)
        create_comment(revision)
      end
    end

    def update_revision_status(revision)
      revision.lock!
      revision.status = 'rejected'
      revision.save
    end

    def create_event(revision)
      events << Event.create!(
        action: 'revision rejected',
        originating_user: rejecting_user,
        subject: revision.subject,
        originating_object: revision,
        organization: resolve_organization(rejecting_user, organization_id)
      )
    end

    def create_comment(revision)
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
