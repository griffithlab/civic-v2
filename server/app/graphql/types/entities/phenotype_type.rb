module Types::Entities
  class PhenotypeType < Types::BaseObject
    field :id, Int, null: false
    field :hpo_id, String, null: false
    field :hpo_class, String, null: false
  end
end
