class SubmitAssertionActivity < Activity
  def assertion
    self.subject
  end

  def generate_verbiage
    'submitted assertion'
  end
end
