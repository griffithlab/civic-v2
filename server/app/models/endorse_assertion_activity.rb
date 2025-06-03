class EndorseAssertionActivity < Activity
  has_one_linked :endorsement

  def assertion
    self.subject
  end

  def generate_verbiage
    "endorsed"
  end
end
