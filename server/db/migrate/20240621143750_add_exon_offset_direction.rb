class AddExonOffsetDirection < ActiveRecord::Migration[7.1]
  def up
    create_enum :exon_offset_direction, [ "positive", "negative" ]

    change_table :variant_coordinates do |t|
      t.enum :exon_offset_direction, enum_type: "exon_offset_direction", null: true
    end
  end

  def down
    remove_column :variant_coordinates, :exon_offset_direction

    execute <<-SQL
      DROP TYPE exon_offset_direction;
    SQL
  end
end
