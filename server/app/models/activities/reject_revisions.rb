module Activities
  class RejectRevisions < Base
    attr_reader :rejecting_user, :revisions

    def initialize(rejecting_user:, revisions:, organization_id: nil, note:)
      super(organization_id: organization_id, user: rejecting_user, note: note)
      @rejecting_user = rejecting_user
      @revisions = revisions
    end

    private
    def create_activity
      @activity = RejectRevisionsActivity.create(
        subject: revisions.first.subject,
        user: rejecting_user,
        organization_id: organization&.id,
        note: note
      )
    end

    def call_actions
      cmd = Actions::RejectRevisions.new(
        revisions: revisions,
        rejecting_user: user,
        organization_id: organization&.id,
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
    end

    def linked_entities
      [ revisions ]
    end
  end
end
