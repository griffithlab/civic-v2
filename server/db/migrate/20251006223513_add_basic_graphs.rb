class AddBasicGraphs < ActiveRecord::Migration[8.0]
  def change
    create_table :nodes do |t|
      t.references :term, polymorphic: true, null: false
      t.timestamps
    end

    create_table :edges do |t|
      t.references :previous_node, null: false, foreign_key: { to_table: :nodes }
      t.references :next_node, null: false, foreign_key: { to_table: :nodes }
      t.text :edge_type, null: false, index: true
    end

    add_index :nodes, [ :id, :term_type ]
    add_index :nodes, [ :term_id, :term_type ]
  end
end
