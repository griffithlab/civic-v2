module Types::BrowseTables
  class BrowseTherapyType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :ncit_id, String, null: true
    field :name, String, null: false
    field :evidence_count, Int, null: false
    field :assertion_count, Int, null: false
    field :therapy_url, String, null: true
    field :link, String, null: false
    field :deprecated, Boolean, null: false
    field :therapy_aliases, [String], null: true

    def therapy_url
      Therapy.url_for(ncit_id: object.ncit_id)
    end

    def therapy_aliases
      #order by size to reduce the chance of the long chemical formulas appearing the table
      object.alias_names&.compact&.sort_by(&:size)
    end

    def link
      Rails.application.routes.url_helpers.url_for("/therapies/#{object.id}")
    end
  end
end
