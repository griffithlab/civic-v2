class AddVerbiageToActivities < ActiveRecord::Migration[6.1]
  def up
    add_column :activities, :verbiage, :text, null: true, index: true

    Activity.find_each do |a|
      a.verbiage = a.generate_verbiage
      a.save!
    end
  end

  def down
    drop_column :activities, :verbiage
  end
end
