install.packages(c("ghql", "jsonlite", "dplyr"), repos="https://cloud.r-project.org")
library(ghql)
library(jsonlite)
library(dplyr)

link <- 'https://civicdb.org/api/graphql'

conn <- GraphqlClient$new(url = link)

query <- '
  query acmgCode($id: Int!) {
    acmgCode(id: $id) {
      code
      description
      id
      name
      tooltip
    }
  }
'

q <- Query$new()$query('codes', query)
variables <- list(id = 9)
result <- conn$exec(q$codes, variables = variables) %>% 
  fromJSON(flatten = F)
result
