import graphqlRequest from "./graphqlRequest";

export async function getPostList(endCursor = null, taxonomy = null) {

  let condition = `first: 100, after: "${endCursor}", where: {orderby: {field: DATE, order: DESC}}`;

  if(taxonomy) {
    condition = `after: "${endCursor}", where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
  }

    const query = {
      query: `query getAllPosts {
        posts(${condition}) {
          nodes {
            date
            slug
            title
            excerpt(format: RENDERED)
            featuredImage {
              node {
                uri
                sourceUrl
                mediaDetails {
                  file
                  sizes {
                    sourceUrl
                    width
                    height
                  }
                }
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
              author {
                node {
                avatar {
                  url
                }
                name
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }`
    };

    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;

    return allPosts;
}

export async function getCategoriesPostList() {

    const query = {
      query: `query getAllPosts {
        categories {
          nodes {
            count
            name
            slug
          }
        }
      }`
    };

    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data;

    return allPosts;
}


export async function getSinglePost(slug) {
    const query = {
      query: `query getSinglePost {
        post(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          date
          excerpt(format: RENDERED)
          modified
          slug
          title(format: RENDERED)
          databaseId
          featuredImage {
            node {
              uri
              sourceUrl
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
              node {
              avatar {
                url
              }
              name
            }
          }
        }
      }`
    };

    const resJson = await graphqlRequest(query);
    const singlePost = resJson.data.post;

    return singlePost;
}

export async function getPostSlugs() {
    const query = {
        query: `query getPostSlugs {
            posts {
              nodes {
                slug
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    const slugs = resJson.data.posts.nodes;
    return slugs;
}

export async function getCategorySlugs() {
  const query = {
    query: `query getCatetorySlugs {
      categories {
        nodes {
          slug
        }
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  const categories = resJson.data.categories.nodes;

  return categories;
}

export async function getCategoryDetails(categoryName) {
  const query = {
    query: `query getCategoryDetails {
      category(id: "${categoryName}", idType: SLUG) {
        count
        name
        slug
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  const categoryDetails = resJson.data.category;

  return categoryDetails;
}
