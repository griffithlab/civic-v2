module Actions
  class SubmitAssertion
    include Actions::Transactional
    include Actions::WithOriginatingOrganization
    attr_reader :assertion, :originating_user, :organization_id, :comment_body

    def initialize(assertion:, originating_user:, organization_id:, comment_body: )
      @assertion = assertion
      @originating_user = originating_user
      @organization_id = organization_id
      @comment_body = comment_body
    end

    private
    def execute
      assertion.status = 'submitted'
      assertion.evidence_items_count = assertion.evidence_item_ids.size
      assertion.save!
      assertion.subscribe_user(originating_user)
      create_event
      create_comment
    end

    def create_event
      Event.create!(
        action: 'assertion submitted',
        originating_user: originating_user,
        subject: assertion,
        organization: resolve_organization(originating_user, organization_id),
        originating_object: assertion
      )
    end

    def create_comment
      if comment_body.present?
        cmd = Actions::AddComment.new(
          title: "",
          body: comment_body,
          commenter: originating_user,
          commentable: assertion,
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
