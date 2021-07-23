module Types::BrowseTables
  class BrowseClinicalTrialType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :nct_id, String, null: true
    field :name, String, null: false
    field :evidence_count, Int, null: false
    field :source_count, Int, null: false
  end
end
