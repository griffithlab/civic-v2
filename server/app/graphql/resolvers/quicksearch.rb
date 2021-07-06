class Resolvers::Quicksearch < GraphQL::Schema::Resolver
  type [Types::Quicksearch::SearchResult], null: false

  argument :query, String, required: true, description: 'The term to query for'

  def resolve(query: )
    Searchkick.search(
      query,
      models: [Gene, Variant],
      limit: 10,
      fields: ['name', 'aliases'],
    ).results.map do |res|
      {
        id: res.id,
        preview_text: res.name,
        result_type: res.class.to_s.upcase
      }
    end
  end

end

