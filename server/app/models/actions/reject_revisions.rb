module Actions
  class RejectRevisions
    include Transactional

    attr_reader :revisions, :rejecting_user, :organization_id

    def initialize(revisions:, rejecting_user:, organization_id:)
      @revisions = revisions
      @rejecting_user = rejecting_user
      @organization_id = organization_id
    end

    def execute
      revisions.each do |revision|
        update_revision_status(revision)
        create_event(revision)
      end
    end

    def update_revision_status(revision)
      revision.lock!
      revision.status = "rejected"
      revision.save
    end

    def create_event(revision)
      events << Event.new(
        action: "revision rejected",
        originating_user: rejecting_user,
        subject: revision.subject,
        originating_object: revision,
        organization_id: organization_id
      )
    end
  end
end
