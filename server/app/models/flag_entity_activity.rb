class FlagEntityActivity < Activity

  has_one_linked :flag
  has_one_linked :comment

  def flaggable
    self.subject
  end

  def generate_verbiage
    'flagged'
  end
end
