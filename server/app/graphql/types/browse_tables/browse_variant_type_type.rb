module Types::BrowseTables
  class BrowseVariantTypeType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :soid, String, null: false
    field :name, String, null: false
    field :variant_count, Int, null: false

    def name
      object.display_name
    end
  end
end
