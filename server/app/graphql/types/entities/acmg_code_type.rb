module Types::Entities
  class AcmgCodeType < Types::BaseObject
    field :id, Int, null: false
    field :code, String, null: false
    field :description, String, null: false
    field :name, String, null: false
    field :tooltip, String, null: false
    field :met, Boolean, null: false

    def tooltip
      object.description
    end
  end
end
