module Types::Entities
  class SpecificationCriteriumType < Types::BaseObject
    field :id, Int, null: false
    field :criterium, String, null: false
    field :description, String, null: false
    field :exclusive, Boolean, null: false

    def exclusive
      object.specification.specification_type == 'clingen_codes' && object.criterium == "N/A"
    end
  end
end
