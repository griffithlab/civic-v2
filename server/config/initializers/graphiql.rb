GraphiQL::Rails.config.initial_query =  <<~QUERY
# Below is an example of fetching a page of accepted Evidence Items using the GraphQL API.
# You can press the "Play >" button to run the query and see the response. Note how the structure mirrors the fields requested in the query.
# Clicking "Docs" in the upper right will allow you to explore the schema including all available queries and the fields you can request on them.
#
# The GraphiQL environment will offer autocompletion and validation as you experient with what's possible.
#
{  
  evidenceItems(status: ACCEPTED, first: 25) {
    totalCount  #Total Count of EIDs matching the criteria
    pageInfo {
      endCursor  #Cursor for the last item in the response. You can pass this to "after" to get the next page.
      hasNextPage #Is there a page after this one?
    }
    nodes {
      id
      status
      variant {
        name
        id
        variantTypes {
          name
          soid
        }
      }
      gene {
        name
        id
      }
      evidenceType
      evidenceLevel
      evidenceRating
      evidenceDirection
      phenotypes {
        id
        hpoId
        name
      }
      description
      disease {
        id
        doid
        name
        diseaseAliases
        displayName
      }
      drugs {
        id
        ncitId
        name
        drugAliases
      }
      source {
        ascoAbstractId
        citationId
        pmcId
        sourceType
        title
      }
      drugInteractionType

    }
  }
}
QUERY
