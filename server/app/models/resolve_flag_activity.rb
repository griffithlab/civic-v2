class ResolveFlagActivity < Activity
  has_one_linked :flag
  has_one_linked :comment

  def flaggable
    self.subject
  end

  def generate_verbiage
    'resolved flag on'
  end
end
