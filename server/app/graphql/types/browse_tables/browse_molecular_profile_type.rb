module Types::BrowseTables
  class BrowseMolecularProfileType < Types::BaseObject

    class LinkableTag < Types::BaseObject
      field :id, Int, null: false
      field :link, String, null: false
      field :name, String, null: false
    end

    connection_type_class(Types::Connections::BrowseTableConnection)
    field :id, Int, null: false
    field :name, String, null: false
    field :diseases, [LinkableTag], null: false
    field :drugs, [LinkableTag], null: false
    field :genes, [LinkableTag], null: false
    field :variants,[LinkableTag], null: false
    field :link, String, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false


    def name
      Loaders::MolecularProfileSegmentsLoader.for(MolecularProfile).load(object.id)
    end

    def link
      Rails.application.routes.url_helpers.url_for("/molecular-profiles/#{object.id}")
    end

    def genes
      Array(object.genes)
        .sort_by { |g| g['name'] }
        .map { |g| { name: g['name'], id: g['id'], link: "/genes/#{g['id']}" } }
    end

    def variants
      Array(object.variants)
        .sort_by { |v| v['name'] }
        .map { |v| { name: v['name'], id: v['id'], link: "/variants/#{v['id']}" } }
    end

    def diseases
      Array(object.diseases)
        .sort_by { |d| -d['total']}
        .map { |d| { name: d['name'], id: d['id'], link: "/disease/#{d['id']}" } }
    end

    def drugs
      Array(object.drugs)
        .sort_by { |d| -d['total']}
        .map { |d| { name: d['name'], id: d['id'], link: "/drugs/#{d['id']}" } }
    end
  end
end
