class AddSourceLinks < ActiveRecord::Migration[8.0]
  def up
    create_enum :source_link_reason, [ 'same_clinical_trial', 'overlapping_data_or_patients', 'related_abstract', 'other' ]
    create_table :source_links do |t|
      t.enum :reason, enum_type: "source_link_reason", null: false
      t.references :source, null: false, foreign_key: { to_table: :sources }
      t.references :linked_source, null: false, foreign_key: { to_table: :sources }
      t.text :note
      t.timestamps
    end
  end

  def down
    drop_table :source_links
    execute <<-SQL
      DROP TYPE source_link_reason;
    SQL
  end
end
