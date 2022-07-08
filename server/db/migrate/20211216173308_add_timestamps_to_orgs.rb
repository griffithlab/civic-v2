class AddTimestampsToOrgs < ActiveRecord::Migration[6.1]
  def change
    add_timestamps :organizations, null: true
  end
end
