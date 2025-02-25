module Actions
  class SuggestSource
    include Actions::Transactional
    attr_reader :source, :originating_user, :organization_id, :molecular_profile_id, :disease_id, :source_suggestion

    def initialize(source:, originating_user:, organization_id:, molecular_profile_id: nil, disease_id: nil)
      @source = source
      @originating_user = originating_user
      @organization_id = organization_id
      @molecular_profile_id = molecular_profile_id
      @disease_id = disease_id
    end

    private
    def execute
      @source_suggestion = SourceSuggestion.create!(
        user: originating_user,
        source: source,
        status: "new",
        molecular_profile_id: molecular_profile_id,
        disease_id: disease_id,
      )
      create_event(source_suggestion)
    end

    def create_event(suggestion)
      events << Event.new(
        action: "publication suggested",
        originating_user: originating_user,
        subject: source,
        organization_id: organization_id,
        originating_object: suggestion
      )
    end
  end
end
