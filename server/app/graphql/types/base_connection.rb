module Types
  class BaseConnection < Types::BaseObject
    # add `nodes` and `pageInfo` fields, as well as `edge_type(...)` and `node_nullable(...)` overrides
    include GraphQL::Types::Relay::ConnectionBehaviors

    description "Default connection type."

    field :total_count, Int, null: false, description:  "The total number of records in this filtered collection."
    field :page_count, Int, "Total number of pages, based on filtered count and pagesize.", null: false

    edges_nullable(false)
    edge_nullable(false)
    node_nullable(false)

    def total_count
      if object.items&.is_a?(ActiveRecord::Relation)
        object.items.reselect("#{object.items.table_name}.id").count
      else
        object.items&.count
      end
    end

    def page_count
      my_total_count = total_count
      return 1 unless my_total_count&.positive?
      # get total count and create array with total count as first item
      possible_page_sizes = [ my_total_count ]

      # add first and last argument counts to the array if they exist
      possible_page_sizes << object.first
      possible_page_sizes << object.last

      # get the smallest of the array items
      actual_page_size = possible_page_sizes.compact.min

      # return the total_count divided by the page size, rounded up
      (my_total_count / actual_page_size.to_f).ceil
    end
  end
end
