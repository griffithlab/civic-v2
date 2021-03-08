module Types::Revisions
  module WithRevisions
    def self.included(klass)
      klass.field :revisions, [Types::Revisions::RevisionType], null: false do
        argument :first, GraphQL::Types::Int, required: false, default_value: 5
        argument :revisionset_id, String, required: false
        argument :status, Types::Revisions::RevisionStatus, required: false
        argument :field_name, String, required: false
      end

      klass.define_method(:revisions) do |first:, revisionset_id: nil, status: nil, field_name: nil|
        allowed_filters = {
          revisionset_id: revisionset_id,
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
          Revision,
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

