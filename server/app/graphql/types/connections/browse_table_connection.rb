module Types::Connections
  class BrowseTableConnection < Types::BaseObject
    # add `nodes` and `pageInfo` fields, as well as `edge_type(...)` and `node_nullable(...)` overrides
    include GraphQL::Types::Relay::ConnectionBehaviors

    description "Connection type used specifically for browse table behavior."

    field :total_count, Int, null: false, description:  "The total number of records of this type, regardless of any filtering."
    field :filtered_count, Int, null: false, description: "The total number of records in this set."
    field :page_count, Int, "Total number of pages, based on filtered count and pagesize.", null: false
    field :last_updated, GraphQL::Types::ISO8601DateTime, "The last time the data in this browse table was refreshed", null: false

    edges_nullable(false)
    edge_nullable(false)
    node_nullable(false)

    def total_count
      object.items&.klass.count
    end

    def filtered_count
      object.items&.to_a.count
    end

    def last_updated
      # If it is not a materialized view, return the current timestamp as it is a live query
      MaterializedViews::ViewLastUpdatedTimestamp
        .find_by(view_name: object.items&.klass.table_name)&.updated_at || DateTime.now
    end

    def page_count
      my_total_count = filtered_count
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
