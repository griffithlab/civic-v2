class RenameDrugsToTherapies < ActiveRecord::Migration[6.1]
  def change
    rename_table :drugs, :therapies

    rename_table :drug_aliases_drugs, :therapies_therapy_aliases
    rename_column :therapies_therapy_aliases, :drug_id, :therapy_id
    rename_column :therapies_therapy_aliases, :drug_alias_id, :therapy_alias_id

    rename_table :drug_aliases, :therapy_aliases

    rename_table :assertions_drugs, :assertions_therapies
    rename_column :assertions_therapies, :drug_id, :therapy_id

    remove_index :drugs_evidence_items, [ :drug_id, :evidence_item_id ]
    remove_index :drugs_evidence_items, :evidence_item_id

    rename_table :drugs_evidence_items, :evidence_items_therapies
    rename_column :evidence_items_therapies, :drug_id, :therapy_id

    add_index :evidence_items_therapies, [ :therapy_id, :evidence_item_id ], name: 'idx_therapy_eid_bridge_table'
    add_index :evidence_items_therapies, :evidence_item_id

    rename_column :evidence_items, :drug_interaction_type, :therapy_interaction_type
    rename_column :assertions, :drug_interaction_type, :therapy_interaction_type
  end
end
