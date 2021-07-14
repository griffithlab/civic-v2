module Types::BrowseTables
  class BrowsePhenotypeType < Types::BaseObject
    field :id, Int, null: false
    field :hpo_id, String, null: false
    field :name, String, null: false
    field :evidence_count, Int, null: false
    field :assertion_count, Int, null: false

    def name
      object.hpo_class
    end
  end
end
