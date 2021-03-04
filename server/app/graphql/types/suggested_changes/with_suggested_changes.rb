module Types::SuggestedChanges
  module WithSuggestedChanges
    def self.included(klass)
      klass.field :suggested_changes, [Types::SuggestedChanges::SuggestedChangeType], null: false do
        argument :first, GraphQL::Types::Int, required: false, default_value: 5
        argument :changeset_id, String, required: false
        argument :status, Types::SuggestedChanges::SuggestedChangeStatus, required: false
        argument :field_name, String, required: false
      end

      klass.define_method(:suggested_changes) do |first:, changeset_id: nil, status: nil, field_name: nil|
        allowed_filters = {
          changeset_id: changeset_id,
          status: status,
          field_name: field_name
        }

        selected_filters = allowed_filters.select { |_, v| v.present?  }

        merged_scope = if selected_filters.any?
                         -> { where(selected_filters) }
                       else
                         -> { all }
                       end

        Loaders::PolymorphicWindowLoader.for(
          V2SuggestedChange,
          :subject,
          object.class,
          limit: first,
          order_dir: :desc,
          merge: merged_scope
        ).load(object.id)
      end
    end
  end
end

