module Activities
  class SuggestRevisionSet < Base
    attr_reader :revision_set, :revisions, :revision_results, :revised_objects, :subject

    def initialize(originating_user:, revised_objects:, subject:, organization_id: nil, note:)
      super(organization_id: organization_id, user: originating_user, note: note)
      @revised_objects = revised_objects
      @subject = subject
    end

    private
    def create_activity
      @activity = SuggestRevisionSetActivity.create!(
        subject: subject,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::SuggestRevisionSet.new(
        revised_objects: revised_objects,
        event_subject: subject,
        originating_user: user,
        organization_id: organization&.id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end

      events << cmd.events
      @revision_set = cmd.revision_set
      @revisions = cmd.revisions
      @revision_results = cmd.revision_results
    end

    def linked_entities
      new_revision_ids = revision_results
        .select { |r| r[:newly_created] }
        .map { |r| r[:id] }

      new_revisions = revisions.select { |r| new_revision_ids.include?(r.id) }

      [ revision_set, new_revisions ].flatten
    end
  end
end
