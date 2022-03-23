module Types::BrowseTables
  class BrowseClinicalTrialType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :nct_id, String, null: true
    field :name, String, null: false
    field :evidence_count, Int, null: false
    field :source_count, Int, null: false
    field :url, String, null: true
    field :link, String, null: false

    def url
      ClinicalTrial.url_for(nct_id: object.nct_id)
    end
  end
end
