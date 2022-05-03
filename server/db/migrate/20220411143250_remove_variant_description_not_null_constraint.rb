class RemoveVariantDescriptionNotNullConstraint < ActiveRecord::Migration[6.1]
  def up
    change_column_null :variants, :description, true

    Variant.where(description: "").all.map do |v|
      v.description = nil
      v.save
    end
  end

  def down
    Variant.where(description: nil).all.map do |v|
      v.description = ""
      v.save
    end

    change_column_null :variants, :description, false
  end
end
