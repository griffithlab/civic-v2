module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    include Types::Queries::UserQueries

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :browseGenes, resolver: Resolvers::BrowseGenes
    field :browseEvents, resolver: Resolvers::BrowseEvents

    field :disease, Types::Entities::DiseaseType, null: true do
      description "Find a disease by CIViC ID"
      argument :id, ID, required: true
    end

    field :drug, Types::Entities::DrugType, null: true do
      description "Find a drug by CIViC ID"
      argument :id, ID, required: true
    end

    field :gene, Types::Entities::GeneType, null: true do
      description "Find a gene by CIViC ID"
      argument :id, ID, required: true
    end

    field :source, Types::Entities::SourceType, null: true do
      description "Find a source by CIViC ID"
      argument :id, ID, required: true
    end

    field :search_genes, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
      argument :query, Types::AdvancedSearch::GeneSearchFilterType, required: true
      argument :create_permalink, Boolean, required: false, default_value: false
    end

    field :search_by_permalink, Types::AdvancedSearch::AdvancedSearchResultType, null: false do
      argument :permalink_id, String, required: true
    end

    def disease(id: )
      Disease.find(id)
    end

    def drug(id: )
      Drug.find(id)
    end

    def gene(id: )
      Gene.find(id)
    end

    def source(id: )
      Source.find(id)
    end

    def search_genes(query:, create_permalink:)
      permalink = if create_permalink
                    ::AdvancedSearch.where(
                      params: context.query.query_string,
                      search_type: 'searchGenes'
                    ).first_or_create
                      .token
                  else
                    nil
                  end

      {
        result_ids: ::AdvancedSearches::Gene.new(query: query).results,
        permalink_id: permalink,
        search_endpoint: 'searchGenes'
      }
    end

    def search_by_permalink(permalink_id:)
      saved_search = ::AdvancedSearch.find_by(token: permalink_id)

      if saved_search.nil?
        raise GraphQL::ExecutionError.new("Saved search with id #{permalink_id} not found.")
      end

      result = Civic2Schema.execute(saved_search.params, context: context)
      formatted_hash = result.to_h.dig('data', saved_search.search_type)
      {
        permalink_id: formatted_hash['permalinkId'],
        result_ids: formatted_hash['resultIds'],
        search_endpoint: saved_search.search_type
      }
    end
  end
end
