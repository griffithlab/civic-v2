module Actions
  class SuggestSource
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :source, :originating_user, :organization_id, :molecular_profile_id, :disease_id, :source_suggestion, :comment_body

    def initialize(source:, originating_user:, organization_id:, comment_body:, molecular_profile_id: nil, disease_id: nil )
      @source = source
      @originating_user = originating_user
      @organization_id = organization_id
      @molecular_profile_id = molecular_profile_id
      @comment_body = comment_body
      @disease_id = disease_id
    end

    private
    def execute
      @source_suggestion = SourceSuggestion.create!(
        user: originating_user,
        source: source,
        initial_comment: comment_body,
        status: 'new',
        molecular_profile_id: molecular_profile_id,
        disease_id: disease_id,
      )
      create_event(source_suggestion)
    end

    def create_event(suggestion)
      events << Event.create!(
        action: 'publication suggested',
        originating_user: originating_user,
        subject: source,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: suggestion
      )
    end
  end
end
