module Types::Entities
  class VariantTypeType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :soid, String, null: false
    field :url, String, null: false

    def name
      object.display_name
    end
  end
end
