const githubQuery = (
  pageCount, 
  queryString, 
  paginationKeyword, 
  paginationString
  ) => {
  return {
    query: `
    {
      viewer {
        login
      }
      search(query: "${queryString} user: lewissaunders sort: updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
        repositoryCount
        edges {
          cursor
          node {
            ... on Repository {
              name
              description
              id
              url
              viewerSubscription
              licenseInfo {
                spdxId
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        
      }
    }
    `,
  };
  }
    

export default githubQuery;