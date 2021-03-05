module Types
  class BaseConnection < Types::BaseObject
    # add `nodes` and `pageInfo` fields, as well as `edge_type(...)` and `node_nullable(...)` overrides
    include GraphQL::Types::Relay::ConnectionBehaviors

    field :total_count, Int, null: false

    def total_count
      object.items&.count
    end

    field :total_page_count, Int, 'Total # of pages, based on total count and pagesize', null: false
    def total_page_count
      my_total_count = total_count
      return 1 unless my_total_count.positive?
      # get total count and create array with total count as first item
      possible_page_sizes = [my_total_count]

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
