module Activities
  class SubmitCriteriaEvaluations < Base
    attr_reader :assertion_id, :specification_id, :evaluations, :cmd, :specification_evaluations

    def initialize(originating_user:, assertion_id:, specification_id:, evaluations:, organization_id: nil)
      super(organization_id: organization_id, user: originating_user)
      @assertion_id = assertion_id
      @specification_id = specification_id
      @evaluations = evaluations
    end

    def create_activity
      @activity = SubmitCriteriaEvaluationsActivity.create!(
        subject_type: "Assertion",
        subject_id: assertion_id,
        user: user,
        organization: organization,
      )
    end

    def call_actions
      @cmd = Actions::SubmitCriteriaEvaluations.new(
        originating_user: user,
        assertion_id: assertion_id,
        specification_id: specification_id,
        evaluations: evaluations,
        organization_id: organization&.id
      )
      cmd.perform
      if !cmd.succeeded?
        raise StandardError.new(cmd.errors.join(", "))
      end
      events << cmd.events
      @specification_evaluations = cmd.specification_evaluations
    end

    def linked_entities
      spec = specification_evaluations
      .first
      .specification_criterium
      .specification
      [ specification_evaluations, spec  ]
    end
  end
end
