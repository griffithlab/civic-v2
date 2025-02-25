class ResolveFlagActivity < Activity
  has_one_linked :flag

  def flaggable
    self.subject
  end

  def generate_verbiage
    "resolved a flag on"
  end
end
