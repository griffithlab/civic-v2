module Actions
  class ChangeAssertionSubmittingOrg
    include Actions::Transactional

    attr_reader :assertion, :new_organization_id, :submission_activity

    def initialize(assertion_id:, new_organization_id:)
      @assertion = Assertion.find(assertion_id)
      @new_organization_id = new_organization_id.to_i
      @submission_activity = assertion.submission_activity
    end

    def execute
      check_org_is_submitting_users_org
      move_assertion
    end

    private
    def check_org_is_submitting_users_org
      if !submission_activity.user.organization_ids.include?(new_organization_id)
        raise StandardError.new("New organization is not one of the submitting user's organizations")
      end
    end

    def move_assertion
      submission_activity.organization_id = new_organization_id
      submission_activity.save!
    end
  end
end
