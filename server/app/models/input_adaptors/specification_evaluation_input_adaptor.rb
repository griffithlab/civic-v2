# Conversion from a GraphQL SpecificationEvaluationFields input object to
# SpecificationEvaluation model type
class InputAdaptors::SpecificationEvaluationInputAdaptor
  attr_reader :input, :assertion_id, :specification_id

  def initialize(evaluation_input_object:, assertion_id:, specification_id:)
    @input = evaluation_input_object
    @assertion_id = assertion_id
    @specification_id = specification_id
  end

  def perform
    SpecificationEvaluation.new(self.class.evaluation_fields(input, assertion_id, specification_id))
  end

  def self.evaluation_fields(input, assertion_id, specification_id)
    specification_criterion = SpecificationCriterion.find_by(specification_id: specification_id, criterion: input.specification_criterion)
    {
        assertion_id: assertion_id,
        specification_criterion_id: specification_criterion.id,
        evaluation: input.evaluation,
        modifier: input.modifier,
        justification: input.justification,
        evidence_item_ids: input.evidence_item_ids,
    }
  end
end
