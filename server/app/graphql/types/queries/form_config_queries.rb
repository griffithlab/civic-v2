module Types::Queries
  module FormConfigQueries
    def self.included(klass)
      klass.field :specification_form_config, Types::Internal::SpecificationFormConfigType, null: true do
        argument :specification_id, GraphQL::Types::Int, required: true
        description "Return specification information suitable for building an edit form"
      end

      def specification_form_config(specification_id:)
        Specification.find_by(id: specification_id)
      end
    end
  end
end
