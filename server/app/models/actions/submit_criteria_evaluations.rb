module Actions
  class SubmitCriteriaEvaluations
    include Actions::Transactional
    attr_reader :assertion_id, :specification_id, :evaluations, :organization_id, :originating_user, :specification_evaluations

    def initialize(assertion_id:, specification_id:, evaluations:, originating_user:, organization_id:)
      @assertion_id = assertion_id
      @specification_id = specification_id
      @evaluations = evaluations
      @originating_user = originating_user
      @organization_id = organization_id
    end

    private
    def execute
      @specification_evaluations = evaluations.map do |evaluation|
        specification_criterion = SpecificationCriterion.find_by(specification_id: specification_id, criterion: evaluation.specification_criterion)
        if specification_criterion.nil?
          raise StandardError.new("SpecificationCriterion for specification ID #{specification_id} and criterion #{evaluation.specification_criterion} doesn't exit.")
        end
        SpecificationEvaluation.create(
          assertion_id: assertion_id,
          specification_criterion_id: specification_criterion.id,
          evaluation: evaluation.evaluation,
          modifier: evaluation.modifier,
          justification: evaluation.justification,
          evidence_item_ids: evaluation.evidence_item_ids
        )
      end
    end

    def create_event
      events << specification_evaluation.map do |evaluation|
         Event.new(
          action: "specification evaluation submitted",
          originating_user: originating_user,
          subject_type: "Assertion",
          subject_id: assertion_id,
          organization_id: organization_id,
          originating_object: evaluation
        )
     end
    end
  end
end
