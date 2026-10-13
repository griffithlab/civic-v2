module Types::Entities
  class AcmgCodeType < Types::BaseObject
    field :id, Int, null: false
    field :code, String, null: false
    field :description, String, null: false

    def code
      object.criterion
    end
  end
end
