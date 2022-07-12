class AddTimestampsToMps < ActiveRecord::Migration[6.1]
  def change
    add_timestamps :molecular_profiles
  end
end
