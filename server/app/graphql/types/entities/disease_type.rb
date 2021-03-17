module Types::Entities
  class DiseaseType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :display_name, String, null: false
    field :doid, Int, null: true
    field :disease_url, String, null: true
  end
end
