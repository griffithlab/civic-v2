class SubmitEvidenceItemActivity < Activity
  def evidence_item
    self.subject
  end

  def generate_verbiage
    "submitted"
  end
end
