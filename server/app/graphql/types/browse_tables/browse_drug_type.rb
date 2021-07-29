module Types::BrowseTables
  class BrowseDrugType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :ncit_id, String, null: true
    field :name, String, null: false
    field :drug_url, String, null: true
    field :evidence_count, Int, null: false
    field :assertion_count, Int, null: false
    field :drug_url, String, null: true

    def drug_url
      Drug.url_for(ncit_id: object.ncit_id)
    end
  end
end
