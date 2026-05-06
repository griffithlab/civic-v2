class AddIscnNameToVariants < ActiveRecord::Migration[8.0]
  def change
    add_column :variants, :iscn_name, :string, null: true
    add_index :variants, :iscn_name
  end
end
