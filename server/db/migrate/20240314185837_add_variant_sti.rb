class AddVariantSti < ActiveRecord::Migration[6.1]
  def up
    add_column :variants, :type, :string, index: true
    add_column :variants, :ncit_id, :string, null: true, index: true

    Variant.find_each do |v|
      v.type = 'Variants::GeneVariant'
      v.save!(validate: false)
    end

    change_column_null :variants, :type, false
  end

  def down
    remove_column :variants, :type
    remove_column :variants, :ncit_id
  end
end
