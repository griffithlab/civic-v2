import requests
import pprint


#helper method to run the API query
def run_query(query, variables):
    request = requests.post('https://civicdb.org/api/graphql', json={'query': query, 'variables': variables})
    if request.status_code == 200:
        return request.json()
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(request.status_code, query))

# The GraphQL query you want to run
query = """
query variants($after: String) {
  variants(after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      name
      variantAliases
        variantTypes {
        id
        soid
        description
      }
      ... on GeneVariant {
        coordinates {
          chromosome
          start
          stop
          referenceBases
          variantBases
          representativeTranscript
          referenceBuild
        }
      }
      ... on FactorVariant {
        name
        ncitId
      }
      ... on FusionVariant {
        viccCompliantName
      }
    }
  }
}
"""


hasNextPage = True
previousPageEnd = None
variants = []

#loop through all the pages
while hasNextPage:
    variables = {
      "after": previousPageEnd
    }
    resp = run_query(query, variables)
    data = resp['data']['variants']
    variants = variants + data['nodes']
    hasNextPage = data['pageInfo']['hasNextPage']
    previousPageEnd = data['pageInfo']['endCursor']


pp = pprint.PrettyPrinter(indent=2)
pp.pprint(variants)

