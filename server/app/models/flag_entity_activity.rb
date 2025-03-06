class FlagEntityActivity < Activity
  has_one_linked :flag

  def flaggable
    self.subject
  end

  def generate_verbiage
    "flagged"
  end
end
