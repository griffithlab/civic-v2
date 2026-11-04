class AddIsDraftToSpecifications < ActiveRecord::Migration[8.1]
  def change
    add_column :specifications, :is_draft, :boolean, null: false, default: false
  end
end
