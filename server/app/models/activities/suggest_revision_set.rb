module Activities
  class SuggestRevisionSet < Base
    attr_reader :revision_set, :revisions, :revision_results, :existing_obj, :updated_obj

    def initialize(originating_user:, existing_obj:, updated_obj:, organization_id: nil, comment_body:)
      super(organization_id: organization_id, user: originating_user, comment_body: comment_body)
      @existing_obj = existing_obj
      @updated_obj = updated_obj
    end

    private
    def create_activity
      @activity = SuggestRevisionSetActivity.create!(
        subject: existing_obj,
        user: user,
        organization: organization
      )
    end

    def call_actions
      cmd = Actions::SuggestRevisionSet.new(
        existing_obj: existing_obj,
        updated_obj: updated_obj,
        originating_user: user,
        organization_id: organization&.id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end

      events << cmd.events
      @revision_set = cmd.revision_set
      @revisions = cmd.revisions
      @revision_results = cmd.revision_results
    end

    def commentable
      revision_set
    end

    def linked_entities
      [revision_set, revisions, comment].flatten
    end
  end
end
