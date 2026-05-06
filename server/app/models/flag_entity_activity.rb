class FlagEntityActivity < Activity
  has_one_linked :flag
  has_many_linked :approvals

  def flaggable
    self.subject
  end

  def generate_verbiage
    "flagged"
  end
end
