module Types::Entities
  class DrugType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :ncit_id, String, null: true
    field :drug_url, String, null: true
    field :drug_aliases, [String], null: false
    field :link, String, null: false

    def drug_aliases
      Loaders::AssociationLoader.for(Drug, :drug_aliases).load(object).then do |drug_aliases|
        drug_aliases.map{|d| d.name}.sort
      end
    end

    def drug_url
      Drug.url_for(ncit_id: object.ncit_id)
    end
  end
end
