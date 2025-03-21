class ModerateEvidenceItemActivity < Activity
  has_many_linked :endorsements

  def evidence_item
    self.subject
  end

  def generate_verbiage
    action = self.events[0].action
    "#{action}"
  end
end
