class AddViccNameToVariants < ActiveRecord::Migration[7.1]
  def change
    add_column :variants, :vicc_compliant_name, :string, null: true
    add_index :variants, :vicc_compliant_name
  end
end
