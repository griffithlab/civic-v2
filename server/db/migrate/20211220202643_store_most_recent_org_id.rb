class StoreMostRecentOrgId < ActiveRecord::Migration[6.1]
  def up
    add_column :users, :most_recent_organization_id, :integer, null: true
    add_foreign_key :users, :organizations, column: :most_recent_organization_id

    User.joins(:events).find_each do |u|
      # newest event
      e = u.events.first
      u.most_recent_organization_id = e.organization_id
      u.save
    end
  end

  def down
    remove_column :users, :most_recent_organization_id
    remove_foreign_key :users, :organizations, column: :most_recent_organization_id
  end
end
