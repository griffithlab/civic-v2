class CreateDiseaseXrefs < ActiveRecord::Migration[8.0]
  def change
    create_table :disease_xrefs do |t|
      t.references :disease, null: false, foreign_key: true, index: true
      t.string :xref_db, null: false
      t.string :xref_id, null: false
      t.timestamps
    end

    add_index :disease_xrefs, [ :disease_id, :xref_db, :xref_id ], unique: true, name: 'index_disease_xrefs_on_disease_and_xref'
    add_index :disease_xrefs, [ :xref_db, :xref_id ], name: 'index_disease_xrefs_on_xref'
  end
end
