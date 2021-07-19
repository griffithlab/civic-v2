module Types::BrowseTables
  class BrowseSourceType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :source_type, Types::SourceSourceType, null: false
    field :citation_id, Int, null: false
    field :authors, [String], null: false
    field :publication_year, Int, null: true
    field :journal, String, null: true
    field :name, String, null: true
    field :evidence_item_count, Int, null: false
    field :citation, String, null: false

    def citation
      object.description
    end
  end
end
