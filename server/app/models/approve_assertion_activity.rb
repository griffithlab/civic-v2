class ApproveAssertionActivity < Activity
  has_one_linked :approval

  def assertion
    self.subject
  end

  def generate_verbiage
    "approved"
  end
end
