module Activities
  class SuggestRevisionSet < Base
    attr_reader :revision_set, :revisions, :revision_results, :existing_obj, :updated_obj

    def initialize(originating_user:, existing_obj:, updated_obj:, organization_id: nil, note:)
      super(organization_id: organization_id, user: originating_user, note: note)
      @existing_obj = existing_obj
      @updated_obj = updated_obj
    end

    private
    def create_activity
      subject = if existing_obj.kind_of?(IsFeatureInstance)
        existing_obj.feature
      else
        existing_obj
      end
      @activity = SuggestRevisionSetActivity.create!(
        subject: subject,
        user: user,
        organization: organization,
        note: note
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

    def linked_entities
      [revision_set, revisions].flatten
    end
  end
end
