require 'httparty'
require 'json'

def call_graphql_api(url:, query:, vars:)
  headers = {
    'Content-Type' => 'application/json',
    'Accept' => 'application/json'
  }

  res = HTTParty.post(
    url,
    headers: headers,
    body: {
      query: query,
      variables: vars
    }.to_json
  )
  if res.success?
    res.parsed_response
  else
    raise StandardError.new(res.body)
  end
end

query = "query gene($entrezSymbol: String!){
  gene(entrezSymbol: $entrezSymbol) {
    name
    entrezId
    variants {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        name
        link
      }
    }
  }
}"

variables = {
  entrezSymbol: "BRAF"
}

pp call_graphql_api(
  url: "https://civicdb.org/api/graphql",
  query: query,
  vars: variables
)
