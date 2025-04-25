module Types::Entities
  class ClingenCodeType < Types::BaseObject
    field :id, Int, null: false
    field :code, String, null: false
    field :description, String, null: false
    field :name, String, null: false
    field :tooltip, String, null: false
    field :exclusive, Boolean, null: false

    def tooltip
      object.description
    end

    def exclusive
      object.code == "N/A"
    end
  end
end
