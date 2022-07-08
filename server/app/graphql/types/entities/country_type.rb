module Types::Entities
  class CountryType < Types::BaseObject
    field :id, Int, null: false
    field :iso, String, null: false
    field :name, String, null: false
  end
end
