class AddVariantCoordinateTable < ActiveRecord::Migration[7.1]
  def change
    create_table :variant_coordinates do |t|
      t.text :chromosome, index: true, null: true
      t.bigint :start, index: true, null: true
      t.bigint :stop, index: true, null: true
      t.text :reference_bases, null: true
      t.text :variant_bases, null: true
      t.integer :exon_boundary, null: true
      t.integer :exon_offset, null: true
      t.integer :ensembl_version, null: true
      t.text :representative_transcript, index: true, null: true
      t.integer :reference_build, null: true, index: true
      t.references :variant, null: true, index: true
      t.text :coordinate_type, null: false
      t.timestamps
    end

    add_foreign_key :variant_coordinates, :variants
  end
end
