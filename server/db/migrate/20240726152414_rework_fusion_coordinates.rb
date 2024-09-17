class ReworkFusionCoordinates < ActiveRecord::Migration[7.1]
  def change
    remove_column :variant_coordinates, :exon_offset_direction
    remove_column :variant_coordinates, :exon_offset
    remove_column :variant_coordinates, :exon_boundary

    create_table :exon_coordinates do |t|
      t.text :chromosome, index: true, null: false
      t.enum :strand, enum_type: "exon_offset_direction", null: false
      t.bigint :start, index: true, null: false
      t.bigint :stop, index: true, null: false
      t.integer :exon, null: false
      t.text :ensembl_id, null: false
      t.integer :exon_offset, null: true
      t.enum :exon_offset_direction, enum_type: "exon_offset_direction", null: true
      t.integer :ensembl_version, null: false
      t.text :representative_transcript, index: true, null: false
      t.integer :reference_build, null: true, index: false
      t.references :variant, null: false, index: true
      t.text :coordinate_type, null: false
      t.timestamps
    end

    add_foreign_key :exon_coordinates, :variants
  end
end
