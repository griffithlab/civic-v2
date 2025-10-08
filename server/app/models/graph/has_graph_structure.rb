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

      class_attribute :default_edge_type, default: "is_a"

      has_one :graph_node, as: :term, class_name: "Graph::Node", dependent: :destroy

      def add_parent_term(term, relationship: default_edge_type)
        parent_term = Graph::Node.find_by(term: term)
        Graph::Edge.find_or_create_by!(previous_node: parent_term, next_node: self.graph_node, edge_type: relationship)
      end

      def add_child_term(term, relationship: default_edge_type)
        child_term = Graph::Node.find_by(term: term)
        Graph::Edge.find_or_create_by!(previous_node: self.graph_node, next_node: child_term, edge_type: relationship)
      end

      def remove_parent_term(term, relationship: default_edge_type)
        parent_term = Graph::Node.find_by(term: term)
        Graph::Edge.where(previous_node: parent_term, next_node: self.graph_node, edge_type: relationship).destroy_all
      end

      def delete_child_term(term, relationship:)
        child_term = Graph::Node.find_by(term: term)
        Graph::Edge.where(previous_node: self.graph_node, next_node: child_term, edge_type: relationship).destroy_all
      end

      # get only direct child nodes
      def direct_children(relationship: default_edge_type)
        instance_sql_for(direct_children_sql(relationship: relationship))
      end

      # get all child nodes recursively
      def all_children(relationship: default_edge_type)
        instance_sql_for(all_children_sql(relationship: relationship))
      end

      # get sibling nodes
      def siblings(relationship: default_edge_type)
        instance_sql_for(siblings_sql(relationship: relationship))
      end

      # get direct parent nodes
      def direct_parents(relationship: default_edge_type)
        instance_sql_for(direct_parents_sql(relationship: relationship))
      end

      # get all parent nodes rescursively
      def all_parents(relationship: default_edge_type)
        instance_sql_for(all_parents_sql(relationship: relationship))
      end

      def save(...)
        create_node
        super
      end

      def save!(...)
        create_node
        super
      end

      private

      def create_node
        Graph::Node.where(term: self).first_or_create!
      end

      def delete_node
        Graph::Node.where(term: self).destroy_all
      end

      def escape(string)
        ActiveRecord::Base.connection.quote(string)
      end


      def direct_children_sql(relationship:)
        <<-SQL
          SELECT term_id
          FROM nodes
          JOIN edges on nodes.id = edges.next_node_id
          WHERE edges.previous_node_id = #{self.graph_node.id}
          AND edges.edge_type = #{escape(relationship)}
        SQL
      end

      def all_children_sql(relationship:)
        <<-SQL
          WITH RECURSIVE search_tree AS (
            SELECT edges.next_node_id
            FROM edges
            WHERE edges.previous_node_id = #{self.graph_node.id}
            AND edges.edge_type = #{escape(relationship)}
            UNION
            SELECT edges.next_node_id
            FROM edges
            JOIN search_tree ON edges.previous_node_id = search_tree.next_node_id
            WHERE edges.edge_type = #{escape(relationship)}
          )
          SELECT nodes.term_id
          FROM nodes
          JOIN search_tree on nodes.id = search_tree.next_node_id
          WHERE nodes.term_type = '#{self.class}'
        SQL
      end

      def direct_parents_sql(relationship:)
        <<-SQL
          SELECT term_id
          FROM nodes
          JOIN edges on nodes.id = edges.previous_node_id
          WHERE edges.next_node_id = #{self.graph_node.id}
          AND edges.edge_type = #{escape(relationship)}
        SQL
      end

      def all_parents_sql(relationship:)
        <<-SQL
          WITH RECURSIVE search_tree AS (
            SELECT edges.previous_node_id
            FROM edges
            WHERE edges.next_node_id = #{self.graph_node.id}
            AND edges.edge_type = #{escape(relationship)}
            UNION
            SELECT edges.previous_node_id
            FROM edges
            JOIN search_tree ON edges.next_node_id = search_tree.previous_node_id
            WHERE edges.edge_type = #{escape(relationship)}
          )
          SELECT nodes.term_id
          FROM nodes
          JOIN search_tree on nodes.id = search_tree.previous_node_id
          WHERE nodes.term_type = '#{self.class}'
        SQL
      end

      def siblings_sql(relationship:)
        <<-SQL
           SELECT nodes.term_id
           FROM nodes
           JOIN edges ON nodes.id = edges.next_node_id
           WHERE edges.previous_node_id IN (
             SELECT edges.previous_node_id
             FROM edges
             WHERE edges.next_node_id = #{self.graph_node.id}
             AND edges.edge_type = #{escape(relationship)}
           )
           AND edges.edge_type = #{escape(relationship)}
           AND nodes.id != #{self.graph_node.id}
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
