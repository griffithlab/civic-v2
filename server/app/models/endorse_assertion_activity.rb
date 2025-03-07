class EndorseAssertionActivity < Activity
  has_one_linked :endorsement
  has_one_linked :endorsement_log

  def assertion
    self.subject
  end

  def generate_verbiage
    "endorsed assertion"
  end
end
