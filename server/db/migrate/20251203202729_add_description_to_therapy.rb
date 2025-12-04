class AddDescriptionToTherapy < ActiveRecord::Migration[8.0]
  def change
    add_column :therapies, :description, :text, null: true, limit: nil
  end
end
