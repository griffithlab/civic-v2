class VersionedCodes < ActiveRecord::Migration[8.1]
  def change
    create_enum :specification_types, [
      "amp_tiers",
      "clingen_codes",
      "acmg_codes",
    ]

    create_enum :assertion_types, [
     "Diagnostic",
     "Prognostic",
     "Predictive",
     "Predisposing",
     "Oncogenic",
    ]

    create_table :specifications do |t|
      t.text :name, null: false
      t.enum :specification_type, enum_type: "specification_types", null: false
      t.enum :assertion_type, enum_type: "assertion_types", null: false
      t.text :version, null: false
      t.text :specification_url, null: false
      t.integer :sop_pubmed_id, null: true
      t.date :published_on, null: false
      t.references :organization, null: true
      t.timestamps
    end

    create_table :specification_criteria do |t|
      t.text :criterium, null: false
      t.text :description, null: false
      t.references :specification, null: false
      t.timestamps
    end
  end
end
