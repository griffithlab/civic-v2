module Graph
  class Node < ApplicationRecord
    belongs_to :term, polymorphic: true

    has_many :outgoing_edges, class_name: "Graph::Edge", foreign_key: :previous_node_id, dependent: :destroy
    has_many :next_nodes, through: :outgoing_edges, source: :next_node, dependent: :destroy

    has_many :incoming_edges, class_name: "Graph::Edge", foreign_key: :next_node_id, dependent: :destroy
    has_many :previous_nodes, through: :incoming_edges, source: :previous_node, dependent: :destroy
  end
end
