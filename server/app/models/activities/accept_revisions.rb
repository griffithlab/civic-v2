module Activities
  class AcceptRevisions < Base
    attr_reader :revisions, :accepting_user, :superseded_revisions

    def initialize(accepting_user:, revisions:, organization_id: nil, note:)
      super(organization_id: organization_id, user: accepting_user, note: note)
      @revisions = revisions
      @accepting_user = accepting_user
    end

    private
    def create_activity
      @activity = AcceptRevisionsActivity.create!(
        subject: revisions.first.subject,
        user: accepting_user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::AcceptRevisions.new(
        revisions: revisions,
        accepting_user: accepting_user,
        organization_id: organization&.id,
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end
      events << cmd.events
      @superseded_revisions = cmd.superseded_revisions
    end

    def linked_entities
      [revisions, superseded_revisions]
    end
  end
end
