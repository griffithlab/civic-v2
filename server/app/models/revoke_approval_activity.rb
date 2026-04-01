class RevokeApprovalActivity < Activity
  has_one_linked :approval

  def assertion
    self.subject
  end

  def generate_verbiage
    "revoked approval of"
  end
end
