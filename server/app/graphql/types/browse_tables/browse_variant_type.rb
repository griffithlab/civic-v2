module Types::BrowseTables
  class BrowseVariantType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false
    field :gene_id, Int, null: false
    field :gene_name, String, null: false
    field :gene_link, String, null: false
    field :diseases, [Types::Entities::DiseaseType], null: false
    field :therapies, [Types::Entities::TherapyType], null: false
    field :aliases, [Types::Entities::VariantAliasType], null: false

    def link
      Rails.application.routes.url_helpers.url_for("/variants/#{object.id}")
    end

    def gene_link
      Rails.application.routes.url_helpers.url_for("/genes/#{object.gene_id}")
    end

    def aliases
      object.alias_names
        .compact
        .map { |d| { name: d } }
    end

    def diseases
      Array(object.diseases)
        .sort_by { |d| -d['total']}
        .map { |d| { name: d['name'], id: d['id'], link: "/disease/#{d['id']}" } }
    end

    def therapies
      Array(object.drugs)
        .sort_by { |d| -d['total']}
        .map { |d| { name: d['name'], id: d['id'], link: "/therapies/#{d['id']}" } }
    end
  end
end
