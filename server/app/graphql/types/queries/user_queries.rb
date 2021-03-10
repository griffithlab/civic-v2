module Types::Queries
  module UserQueries
    def self.included(klass)
      klass.field :user, Types::Entities::UserType, null: true do
        argument :user_id, GraphQL::Types::Int, required: true
      end

      klass.field :viewer, Types::Entities::UserType, null: true

      def user(user_id:)
        User.find(user_id)
      end

      def viewer
        if context[:current_user].nil?
          nil
        else
          User.find(context[:current_user].id)
        end
      end
    end
  end
end
