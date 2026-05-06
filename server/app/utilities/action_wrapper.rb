class ActionWrapper
  AVAILABLE_ACTIONS = [
    MergeAccounts,
    ToggleMaintenanceMode,
  ]

  def self.name
    raise NotImplementedError.new("Specify in subclass")
  end

  def self.description
    raise NotImplementedError.new("Specify in subclass")
  end

  def self.inputs
    # format input_name: :type
    # supported types :text, :date, :boolean, :int
    {}
  end

  def perform(params)
    instance = action_class.new(**params)
    instance.perform
  end

  def action_class
    raise NotImplementedError.new("Implement in Subclass")
  end
end
