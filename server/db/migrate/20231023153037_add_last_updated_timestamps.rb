class AddLastUpdatedTimestamps < ActiveRecord::Migration[6.1]
  def change
    create_table :view_last_updated_timestamps do |t|
      t.text :view_name, null: false, index: true
      t.timestamps
    end
  end
end
