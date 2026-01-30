class ModerateAssertionActivity < Activity
  has_many_linked :approvals

  def assertion
    self.subject
  end

  def generate_verbiage
    action = self.events[0].action
    "#{action.split(" ")[1]}"
  end
end
