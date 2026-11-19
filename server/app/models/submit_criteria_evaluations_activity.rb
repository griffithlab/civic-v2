class SubmitCriteriaEvaluationsActivity < Activity
  has_many_linked :specification_evaluations
  has_one_linked :specification

  def assertion
    self.subject
  end

  def generate_verbiage
    "submitted criteria evaluations for"
  end
end
