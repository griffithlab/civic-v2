class SubmitAssertionActivity < Activity
  has_one_linked :comment

  def assertion
    self.subject
  end

  def generate_verbiage
    'submitted assertion'
  end
end