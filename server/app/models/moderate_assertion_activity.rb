class ModerateAssertionActivity < Activity
  def assertion
    self.subject
  end

  def generate_verbiage
    action = self.events[0].action
    "#{action.split(" ")[1]}"
  end
end
