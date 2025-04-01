class AddCytobandRegions < ActiveRecord::Migration[8.0]
  def change
    create_table :regions do |t|
      t.timestamps
    end

    create_table :cytogenetic_regions do |t|
      t.text :name, null: false, index: true
      t.integer :chromosome, null: false, index: true
      t.text :band, null: false, index: true
      t.timestamps
    end

    create_table :cytogenetic_coordinates do |t|
      t.references :cytogenetic_region, null: false, index: true, foreign_key: true
      t.text :reference_build, null: false, index: true
      t.integer :chromosome, null: false, index: true
      t.integer :start, null: false, index: true
      t.integer :stop, null: false, index: true
    end

    create_table :region_members do |t|
      t.references :regions, index: true, null: false, foreign_key: true
      t.references :cytogenetic_regions, index: true, null: false, foreign_key: true
      t.integer :position, index: true, null: false
      t.timestamps
    end
  end
end
