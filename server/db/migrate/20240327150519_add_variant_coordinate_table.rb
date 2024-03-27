class AddVariantCoordinateTable < ActiveRecord::Migration[7.1]
  def change
    create_table :variant_coordinates do |t|
      t.text :chromosome, index: true, null: false
      t.bigint :start, index: true, null: false
      t.bigint :stop, index: true, null: false
      t.text :reference_bases, null: true
      t.text :variant_bases, null: true
      t.integer :exon_boundary, null: true
      t.integer :exon_offset, null: true
      t.integer :ensembl_version, null: true
      t.text :representative_transcript, index: true, null: false
      t.integer :reference_build, null: false, index: true
      t.references :variant, null: false, index: true
      t.text :coordinate_type, null: false
      t.timestamps
    end

    add_foreign_key :variant_coordinates, :variants
  end
end
