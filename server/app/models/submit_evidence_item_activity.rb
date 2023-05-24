class SubmitEvidenceItemActivity < Activity
  has_one_linked :comment

  def evidence_item
    self.subject
  end

  def generate_verbiage
    'submitted evidence item'
  end
end
