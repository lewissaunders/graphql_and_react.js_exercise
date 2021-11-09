const githubQuery = {
    query: `
    {
      viewer {
        login
        repositories(first:10) {
          nodes {
            name
            description
            id
            url
          }
        }
      }
    }
    `,
  };

export default githubQuery;