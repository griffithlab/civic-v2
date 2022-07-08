class CacheMostRecentActionTimestamp < ActiveRecord::Migration[6.1]
  def up
    add_column :users, :most_recent_action_timestamp, :datetime, null: true
    add_index :users, :most_recent_action_timestamp

    User.all.find_each do |user|
      e = user.events.order(:created_at).first
      user.most_recent_action_timestamp = e&.created_at
      user.save
    end
  end

  def down
    remove_index :users, :most_recent_action_timestamp
    remove_column :users, :most_recent_action_timestamp, :datetime, null: true
  end
end
