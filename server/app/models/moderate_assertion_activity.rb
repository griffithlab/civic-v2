class ModerateAssertionActivity < Activity
  has_many_linked :approvals

  def assertion
    self.subject
  end

  def generate_verbiage
    action = self.events[0].action
    status = action.split(" ")[1]
    status == "withdrawn" ? "withdrew" : status
  end
end
