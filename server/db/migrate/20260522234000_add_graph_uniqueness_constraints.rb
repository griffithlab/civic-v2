class AddGraphUniquenessConstraints < ActiveRecord::Migration[8.0]
  GRAPH_TERM_CLASSES = [ "Disease", "Therapy", "Phenotype", "VariantType" ]

  def up
    remove_orphan_edges
    remove_edges_for_orphan_nodes
    remove_orphan_nodes
    merge_duplicate_nodes
    remove_duplicate_edges
    backfill_missing_nodes

    add_index :nodes, [ :term_type, :term_id ], unique: true, name: "index_nodes_on_term_unique"
    add_index :edges, [ :previous_node_id, :next_node_id, :edge_type ], unique: true, name: "index_edges_on_nodes_and_edge_type_unique"
    add_index :edges, [ :previous_node_id, :edge_type ], name: "index_edges_on_previous_node_and_edge_type"
    add_index :edges, [ :next_node_id, :edge_type ], name: "index_edges_on_next_node_and_edge_type"
  end

  def down
    remove_index :edges, name: "index_edges_on_next_node_and_edge_type"
    remove_index :edges, name: "index_edges_on_previous_node_and_edge_type"
    remove_index :edges, name: "index_edges_on_nodes_and_edge_type_unique"
    remove_index :nodes, name: "index_nodes_on_term_unique"
  end

  private

  def remove_orphan_edges
    execute <<~SQL
      DELETE FROM edges
      WHERE previous_node_id NOT IN (SELECT id FROM nodes)
      OR next_node_id NOT IN (SELECT id FROM nodes)
    SQL
  end

  def remove_orphan_nodes
    GRAPH_TERM_CLASSES.each do |term_class_name|
      term_class = term_class_name.constantize
      execute <<~SQL
        DELETE FROM nodes
        WHERE term_type = #{quote(term_class_name)}
        AND term_id NOT IN (SELECT id FROM #{quote_table_name(term_class.table_name)})
      SQL
    end
  end

  def remove_edges_for_orphan_nodes
    GRAPH_TERM_CLASSES.each do |term_class_name|
      term_class = term_class_name.constantize
      orphan_node_ids_sql = <<~SQL
        SELECT nodes.id
        FROM nodes
        LEFT JOIN #{quote_table_name(term_class.table_name)} terms ON terms.id = nodes.term_id
        WHERE nodes.term_type = #{quote(term_class_name)}
        AND terms.id IS NULL
      SQL

      execute <<~SQL
        DELETE FROM edges
        WHERE previous_node_id IN (#{orphan_node_ids_sql})
        OR next_node_id IN (#{orphan_node_ids_sql})
      SQL
    end
  end

  def merge_duplicate_nodes
    execute <<~SQL
      WITH duplicate_nodes AS (
        SELECT id, MIN(id) OVER (PARTITION BY term_type, term_id) AS keep_id
        FROM nodes
      )
      UPDATE edges
      SET previous_node_id = duplicate_nodes.keep_id
      FROM duplicate_nodes
      WHERE edges.previous_node_id = duplicate_nodes.id
      AND duplicate_nodes.id != duplicate_nodes.keep_id
    SQL

    execute <<~SQL
      WITH duplicate_nodes AS (
        SELECT id, MIN(id) OVER (PARTITION BY term_type, term_id) AS keep_id
        FROM nodes
      )
      UPDATE edges
      SET next_node_id = duplicate_nodes.keep_id
      FROM duplicate_nodes
      WHERE edges.next_node_id = duplicate_nodes.id
      AND duplicate_nodes.id != duplicate_nodes.keep_id
    SQL

    remove_duplicate_edges

    execute <<~SQL
      DELETE FROM nodes
      WHERE id IN (
        SELECT id
        FROM (
          SELECT id, ROW_NUMBER() OVER (PARTITION BY term_type, term_id ORDER BY id) AS row_num
          FROM nodes
        ) ranked_nodes
        WHERE ranked_nodes.row_num > 1
      )
    SQL
  end

  def remove_duplicate_edges
    execute <<~SQL
      DELETE FROM edges
      WHERE id IN (
        SELECT id
        FROM (
          SELECT id, ROW_NUMBER() OVER (
            PARTITION BY previous_node_id, next_node_id, edge_type
            ORDER BY id
          ) AS row_num
          FROM edges
        ) ranked_edges
        WHERE ranked_edges.row_num > 1
      )
    SQL
  end

  def backfill_missing_nodes
    GRAPH_TERM_CLASSES.each do |term_class_name|
      term_class = term_class_name.constantize
      execute <<~SQL
        INSERT INTO nodes (term_type, term_id, created_at, updated_at)
        SELECT #{quote(term_class_name)}, terms.id, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
        FROM #{quote_table_name(term_class.table_name)} terms
        WHERE NOT EXISTS (
          SELECT 1
          FROM nodes
          WHERE nodes.term_type = #{quote(term_class_name)}
          AND nodes.term_id = terms.id
        )
      SQL
    end
  end
end
