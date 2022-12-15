module Types::Entities
  class DiseaseType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :display_name, String, null: false
    field :doid, String, null: true
    field :disease_url, String, null: true
    field :disease_aliases, [String], null: false
    field :link, String, null: false

    def disease_aliases
      Loaders::AssociationLoader.for(Disease, :disease_aliases).load(object).then do |disease_aliases|
        disease_aliases.map{|d| d.name}.sort
      end
    end
  end
end
