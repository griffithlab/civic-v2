class RevokeEndorsementActivity < Activity
  has_one_linked :endorsement

  def assertion
    self.subject
  end

  def generate_verbiage
    "revoked endorsement of assertion"
  end
end
