module Types::Entities
  class CommentType < Types::BaseObject
    field :id, Int, null: false
    field :title, String, null: true
    field :comment, String, null: false
    field :commentor, Types::Entities::UserType, null: false

    def commentor
      Loaders::AssociationLoader.for(Comment, :user).load(object)
    end
  end
end
