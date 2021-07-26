module Types::Entities
  class DrugType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :ncit_id, String, null: true
    field :drug_url, String, null: true
  end
end
