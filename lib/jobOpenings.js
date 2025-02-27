import graphqlRequest from "./graphqlRequest";

export async function getJobOpeningtList(endCursor = null, taxonomy = null) {
  let condition = `after: "${endCursor}", where: {orderby: {field: DATE, order: DESC}}`;

  if (taxonomy) {
    condition = `after: "${endCursor}", where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
  }

  const query = {
    query: `query jobOpenings {
      jobOpenings {
        nodes {
          id
          title
          slug
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const allJobOpenings = resJson;

  return allJobOpenings;
}

export async function getSingleJobOpening(slug) {
  const query = {
    query: `query getSingleJobOpening {
      jobOpening(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          date
          modified
          slug
          title(format: RENDERED)
          databaseId         
        }
      }`,
  };

  const resJson = await graphqlRequest(query);
  const singleJobOpening = resJson?.data?.jobOpening;

  return singleJobOpening;
}

export async function getJobOpeningsSlugs() {
  const query = {
    query: `query getJobOpeningsSlugs {
      jobOpenings {
              nodes {
                slug
              }
            }
          }`,
  };

  const resJson = await graphqlRequest(query);
  const slugs = resJson?.data?.jobOpenings?.nodes;
  return slugs;
}
