class ToggleMaintenanceMode < ActionWrapper
  def self.name
    "Toggle Maintenance Mode"
  end

  def self.description
    "Turn on or off the maintenance page. Please do not touch this unless you're a developer. It will take down the site temporarily."
  end

  def self.inputs
    {
      maintenance_mode_enabled: :boolean
    }
  end

  def action_class
    Actions::ToggleMaintenance
  end
end
