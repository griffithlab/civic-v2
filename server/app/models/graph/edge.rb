module Graph
  class Edge < ApplicationRecord
    belongs_to :previous_node, class_name: "Graph::Node", foreign_key: :previous_node_id, dependent: :destroy
    belongs_to :next_node, class_name: "Graph::Node", foreign_key: :next_node_id, dependent: :destroy
  end
end
