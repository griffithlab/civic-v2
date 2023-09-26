class SubmitEvidenceItemActivity < Activity
  def evidence_item
    self.subject
  end

  def generate_verbiage
    'submitted evidence item'
  end
end
