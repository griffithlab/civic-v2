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
      # Set the subject of this activity to the subject of the revision's creation activity
      # In the case of gene/exon coordinates, the revision's subject will be the coordinate Object
      # which we do not want. The creation activity's subject will be the Variant.
      activity_subject = revisions.first&.creation_activity&.subject
      @activity = RejectRevisionsActivity.create(
        subject: activity_subject,
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
