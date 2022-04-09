module Actions
  class SubmitEvidenceItem
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :evidence_item, :originating_user, :organization_id, :comment_body

    def initialize(evidence_item:, originating_user:, organization_id:, comment_body: )
      @evidence_item = evidence_item
      @originating_user = originating_user
      @organization_id = organization_id
      @comment_body = comment_body
    end

    private
    def execute
      evidence_item.status = 'submitted'
      evidence_item.save!
      evidence_item.subscribe_user(originating_user)
      create_event
      create_comment
    end

    def create_event
      Event.create!(
        action: 'submitted',
        originating_user: originating_user,
        subject: evidence_item,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: evidence_item
      )
    end

    def create_comment
      if comment_body.present?
        cmd = Actions::AddComment.new(
          title: "",
          body: comment_body,
          commenter: originating_user,
          commentable: evidence_item,
          organization_id: organization_id
        )
        cmd.perform
        if !cmd.succeeded?
          raise StandardError.new(cmd.errors.join(', '))
        end
      end
    end
  end
end
