module Actions
  class CreateLinkedSource
    include Actions::Transactional
    attr_reader :source, :linked_source, :originating_user, :organization_id, :reason, :note, :source_link
  
    def initialize(source:, linked_source:, originating_user:, organization_id:, reason:, note: nil)
      @source = source
      @linked_source = linked_source
      @originating_user = originating_user
      @organization_id = organization_id
      @reason = reason
      @note = note
    end
  
    private
  
    def execute
      @source_link = SourceLink.create!(
        source: source,
        linked_source: linked_source,
        reason: reason,
        note: note
      )
      create_event(source_link)
    end
  
    def create_event(link)
      events << Event.new(
        action: "source linked",
        originating_user: originating_user,
        subject: source,
        organization_id: organization_id,
        originating_object: link
      )
    end
  end
end