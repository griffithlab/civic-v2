module Types::Entities
  class ClingenCodeType < Types::BaseObject
    field :id, Int, null: false
    field :code, String, null: false
    field :description, String, null: false
    field :exclusive, Boolean, null: false

    def exclusive
      code == "N/A"
    end

    def code
      object.criterium
    end
  end
end
