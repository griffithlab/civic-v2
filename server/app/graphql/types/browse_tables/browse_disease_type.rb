module Types::BrowseTables
  class BrowseDiseaseType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :display_name, String, null: false
    field :doid, String, null: true
    field :gene_names, [String], null: false
    field :variant_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false
  end
end

