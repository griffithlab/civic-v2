class ResolveFlagActivity < Activity
  has_linked :flag
  has_linked :comment

  def flaggable
    self.subject
  end

  def generate_verbiage
    'resolved flag on'
  end
end
