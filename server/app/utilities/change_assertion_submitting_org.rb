class ChangeAssertionSubmittingOrg < ActionWrapper
  def self.name
    "Change Assertion's submitting organization"
  end

  def self.description
    "Change an Assertion's submitting organization to a different one."
  end

  def self.inputs
    {
      assertion_id: :int,
      new_organization_id: :int,
    }
  end

  def action_class
    Actions::ChangeAssertionSubmittingOrg
  end
end
