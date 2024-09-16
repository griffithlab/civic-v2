class SubmitAssertionActivity < Activity
  def assertion
    self.subject
  end

  def generate_verbiage
    'submitted'
  end
end
