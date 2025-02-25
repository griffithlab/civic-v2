module Activities
  class SuggestSource < Base
    attr_reader :source, :molecular_profile_id, :disease_id, :source_suggestion, :source_suggestion

    def initialize(source_id:, originating_user:, organization_id:, note:, molecular_profile_id: nil, disease_id: nil)
      super(organization_id: organization_id, user: originating_user, note: note)
      @source = Source.find(source_id)
      @molecular_profile_id = molecular_profile_id
      @disease_id = disease_id
    end

    private
    def create_activity
      @activity = SuggestSourceActivity.create!(
        subject: source,
        user: user,
        organization: organization,
        note: note
      )
    end

    def call_actions
      cmd = Actions::SuggestSource.new(
        source: source,
        originating_user: user,
        organization_id: organization&.id,
        molecular_profile_id: molecular_profile_id,
        disease_id: disease_id,
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
      @source_suggestion = cmd.source_suggestion
    end

    def linked_entities
      [ source_suggestion ]
    end
  end
end
