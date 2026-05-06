module Graph
  class Edge < ApplicationRecord
    belongs_to :previous_node, class_name: "Graph::Node", foreign_key: :previous_node_id
    belongs_to :next_node, class_name: "Graph::Node", foreign_key: :next_node_id

    validate :previous_and_next_node_term_type_match

    private
    def previous_and_next_node_term_type_match
      return if previous_node.nil? || next_node.nil?
      if previous_node.term_type != next_node.term_type
        errors.add(:base, "Previous node and next node must have the same term type")
      end
    end
  end
end
