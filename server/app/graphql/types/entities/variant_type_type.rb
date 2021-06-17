module Types::Entities
  class VariantTypeType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :display_name, String, null: false
    field :description, String, null: false
    field :soid, String, null: false
  end
end
