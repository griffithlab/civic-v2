module Actions
  class SuggestSource
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :source, :originating_user, :organization_id, :comment_body, :gene_id, :disease_id, :variant_name, :source_suggestion

    def initialize(source_id:, originating_user:, organization_id:, comment_body:, gene_id: nil, variant_name: nil, disease_id: nil )
      @source = Source.find(source_id)
      @originating_user = originating_user
      @organization_id = organization_id
      @comment_body = comment_body
      @gene_id = gene_id
      @variant_name = variant_name
      @disease_id = disease_id
    end

    private
    def execute
      gene_name = if gene_id
                    Gene.find(gene_id).name
                  else
                    nil
                  end

      disease_name = if disease_id
                       Disease.find(disease_id).name
                     else
                       nil
                     end

      @source_suggestion = SourceSuggestion.create!(
        user: originating_user,
        source: source,
        variant_name: variant_name,
        initial_comment: comment_body,
        status: 'new',
        gene_name: gene_name,
        disease_name: disease_name,
      )
      create_event(source_suggestion)
      create_comment
    end

    def create_event(suggestion)
      Event.create!(
        action: 'publication suggested',
        originating_user: originating_user,
        subject: source,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: suggestion
      )
    end

    def create_comment
      cmd = Actions::AddComment.new(
        title: "",
        body: comment_body,
        commenter: originating_user,
        commentable: source,
        organization_id: organization_id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(', '))
      end
    end
  end
end
