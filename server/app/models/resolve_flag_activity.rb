class ResolveFlagActivity < Activity
  has_one_linked :flag
  has_many_linked :approvals

  def flaggable
    self.subject
  end

  def generate_verbiage
    "resolved a flag on"
  end
end
