module Loaders
  class ModelCountLoader < GraphQL::Batch::Loader
    def initialize(base_query, grouping_field_name:, )

    end

    def perform(ids)
      query(ids).each do |id, count|
        fulfill(id, count)
      end
      ids.each { |id| fulfill(id, 0) unless fulfilled?(id) }
    end

    def query(ids)
    end

  end
end
