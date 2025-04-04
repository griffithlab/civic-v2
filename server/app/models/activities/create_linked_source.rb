module Activities
  class CreateLinkedSource < Base
    attr_reader :source, :linked_source, :reason, :note, :source_link

    def initialize(source:, linked_source:, originating_user:, organization_id:, reason:, note: nil)
      super(organization_id: organization_id, user: originating_user, note: note)
      @source = source
      @linked_source = linked_source
      @reason = reason
    end

    private
    
    def create_activity
      @activity = CreateLinkedSourceActivity.create!(
        subject: source,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::CreateLinkedSource.new(
        source: source,
        linked_source: linked_source,
        originating_user: user,
        organization_id: organization&.id,
        reason: reason,
        note: note
      )
      cmd.perform

      unless cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
      @source_link = cmd.source_link
    end

    def linked_entities
      [source_link]
    end
  end
end