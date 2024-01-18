class AddLastOrgActionTimestamp < ActiveRecord::Migration[6.1]
  def change
    add_column :organizations, :most_recent_activity_timestamp, :datetime, null: true
    add_index :organizations, :most_recent_activity_timestamp

    rename_column :users, :most_recent_action_timestamp, :most_recent_activity_timestamp
  end
end
