class AddDescriptionToPhenotypes < ActiveRecord::Migration[6.1]
  def change
    add_column :phenotypes, :description, :text
  end
end
