class AddEndorsements < ActiveRecord::Migration[8.0]
  def up
    add_column :organizations, :can_endorse, :boolean, null: false, default: false
    add_column :organizations, :is_approved_vcep, :boolean, null: false, default: false

    add_column :affiliations, :can_endorse, :boolean, null: false, default: false

    create_enum :endorsement_status, [ "active", "revoked", "requires_review" ]

    create_table :endorsements do |t|
      t.references :organization, null: false
      t.references :user, null: false
      t.references :assertion, null: false
      t.enum :status, enum_type: "endorsement_status", default: "active", null: false
      t.timestamp :last_reviewed, null: false
      t.timestamps
    end

    create_table :endorsement_logs do |t|
      t.enum :old_status, enum_type: "endorsement_status", null: true
      t.enum :new_status, enum_type: "endorsement_status", null: false
      t.text :note, null: false
      t.references :endorsement
      t.timestamps
    end

    add_column :affiliations, :id, :primary_key
  end

  def down
    remove_column :organizations, :can_endorse
    remove_column :organizations, :is_approved_vcep

    remove_column :affiliations, :id
    remove_column :affiliations, :can_endorse

    drop_table :endorsement_logs
    drop_table :endorsements

    execute <<-SQL
      DROP TYPE endorsement_status;
    SQL
  end
end
