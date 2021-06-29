module Types::BrowseTables
  class BrowseVariantGroupType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :name, String, null: false
    field :variant_names, [String], null: false
    field :gene_names, [String], null: false
    field :variant_count, Int, null: false
    field :evidence_item_count, Int, null: false
  end
end