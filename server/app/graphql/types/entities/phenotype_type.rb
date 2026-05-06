module Types::Entities
  class PhenotypeType < Types::BaseObject
    field :id, Int, null: false
    field :hpo_id, String, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :url, String, null: false
    field :link, String, null: false

    def name
      object.hpo_class || ""
    end
  end
end
