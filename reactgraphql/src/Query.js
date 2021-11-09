const githubQuery = {
    query: `
    {
      viewer {
        login
      }
      search(query: "user: lewissaunders sort: updated-desc", type: REPOSITORY, first: 20) {
        nodes {
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
    }
    `,
  };

export default githubQuery;