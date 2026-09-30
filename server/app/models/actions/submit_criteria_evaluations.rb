module Actions
  class SubmitCriteriaEvaluations
    include Actions::Transactional
    attr_reader :assertion_id, :specification_id, :evaluations, :organization_id, :originating_user, :specification_evaluations

    def initialize(assertion_id:, specification_id:, :evaluations:, originating_user:, organization_id:)
      @assertion_id = assertion_id
      @specification_id = specification_id
      @evaluations = evaluations
      @originating_user = originating_user
      @organization_id = organization_id
    end

    private
    def execute
      @specification_evaluations = evaluations.map do |evaluation|
        specification_criterium = SpecificationCriterium.find_by(specification_id: specification_id, criterium: evaluation.criterium)
        if specification_criterium.nil?
          raise StandardError.new("SpecificationCriterium for specification ID #{specification_id} and criterium #{evaluation.criterium} doesn't exit.")
        end
        SpecificationEvaluation.create(
          assertion_id: assertion_id,
          specification_criterium_id: specification_criterium.id
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
