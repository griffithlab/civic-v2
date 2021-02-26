module Types::Entities
  class CommentType < Types::BaseObject
    field :id, Int, null: false
    field :title, String, null: true
    field :comment, String, null: false
  end
end
