module Types::Shared
  module OrderedList

    def self.included(klass)
      klass.field :previous_items, [klass], null: false do
        description 'Fetch the previous "count" items in chronological order'
        argument :count, GraphQL::Types::Int, required: true,
          validates: { numericality: { within: 1..10 } }
      end

      klass.field :next_items, [klass], null: false do
        description 'Fetch the next "count" items in chronological order'
        argument :count, GraphQL::Types::Int, required: true,
          validates: { numericality: { within: 1..10 } }
      end
    end

    def previous_items(count: )
      base_query = object.class.where("index > ?", prev_object_index)
        .from("(#{prev_table_with_index}) as #{object.class.table_name}")
        .reorder(created_at: :desc)
        .limit(count)

      object_list_scope.call(base_query).reverse
    end

    def next_items(count: )
      base_query = object.class.where("index > ?", next_object_index)
        .from("(#{next_table_with_index}) as #{object.class.table_name}")
        .limit(count)

      object_list_scope.call(base_query)
    end

    private 
    def next_object_index
      @next_index ||= object_index_for_table(next_table_with_index)
    end

    def prev_object_index
      @prev_index ||= object_index_for_table(prev_table_with_index)
    end

    def next_table_with_index
      @next_table ||= object.class.select("#{object.class.table_name}.*, ROW_NUMBER() OVER (ORDER BY created_at asc) as index")
        .to_sql
    end

    def prev_table_with_index
      @prev_table ||= object.class.select("#{object.class.table_name}.*, ROW_NUMBER() OVER (ORDER BY created_at desc) as index")
        .to_sql
    end

    def object_index_for_table(table)
      object.class
        .from("(#{table}) as #{object.class.table_name}")
        .where(id: object.id)
        .first
        .index
    end

    #This can be overidden if you want to further scope the items. For instance you may not want _all_ comments
    #only those that share a commentable
    def object_list_scope
      -> (scope) { scope }
    end
  end
end
