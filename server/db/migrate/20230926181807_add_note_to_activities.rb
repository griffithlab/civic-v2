class AddNoteToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :note, :text, null: true, index: true
  end
end
