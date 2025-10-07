module Graph
  module HasGraphStructure
    extend ActiveSupport::Concern

    class_methods do
      def delete_graph
        Graph::Node.where(term_type: name).destroy_all
      end
    end

    included do
      after_destroy :delete_node

      has_one :graph_node, as: :term, class_name: "Graph::Node", dependent: :destroy

      def add_parent_term(term, relationship:)
        parent_term = Graph::Node.find_by(term: term)
        Graph::Edge.find_or_create_by!(previous_node: parent_term, next_node: self.graph_node, edge_type: relationship)
      end

      def add_child_term(term, relationship:)
        child_term = Graph::Node.find_by(term: term)
        Graph::Edge.find_or_create_by!(previous_node: self.graph_node, next_node: child_term, edge_type: relationship)
      end

      # get only direct child nodes
      def direct_children(relationship: "is_a")
        instance_sql_for(direct_children_sql(relationship: relationship))
      end

      # get all child nodes recursively
      def all_children(relationship: "is_a")
        instance_sql_for(all_children_sql(relationship: relationship))
      end

      def save(...)
        create_node
        super
      end

      def save!(...)
        create_node
        super
      end

      def create_node
        Graph::Node.where(term: self).first_or_create!
      end

      def delete_node
        Graph::Node.where(term: self).destroy_all
      end

      def direct_children_sql(relationship:)
        <<-SQL
          SELECT term_id
          FROM nodes
          JOIN edges on nodes.id = edges.next_node_id
          WHERE edges.previous_node_id = #{self.graph_node.id}
          AND edges.previous_node_id = #{self.graph_node.id}
        SQL
      end

      def all_children_sql(relationship:)
        <<-SQL
          WITH RECURSIVE search_tree AS (
            SELECT edges.next_node_id
            FROM edges
            WHERE edges.previous_node_id = #{self.graph_node.id}
            AND edges.edge_type = '#{relationship}'
            UNION
            SELECT edges.next_node_id
            FROM edges
            JOIN search_tree ON edges.previous_node_id = search_tree.next_node_id
            WHERE edges.edge_type = '#{relationship}'
          )
          SELECT nodes.term_id
          FROM nodes
          JOIN search_tree on nodes.id = search_tree.next_node_id
          WHERE nodes.term_type = '#{self.class}'
        SQL
      end

      # get all the ActiveRecord objects for this class that match the query
      def instance_sql_for(query)
        self.class.where("#{self.class.table_name}.id IN (#{query})")
          .order("#{self.class.table_name}.id")
      end
    end
  end
end
