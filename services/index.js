import { request, gql } from 'graphql-request';

const GraphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection(orderBy: createdAt_DESC) {
                edges {
                    node {
                        author {
                            name
                            bio
                            photo {
                                url
                            }
                            id
                        }
                        createdAt
                        excerpt
                        slug
                        title
                        featuredimage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }

    `

    const result = await request(GraphqlAPI, query)

    return result.postsConnection.edges;

}


export const getRecentPosts = async () => {
    const query = gql`
        query getPostDetails(){
            posts(
                orderBy: createdAt_DESC
                first: 3
            ){
                title
                featuredimage{
                    url
                }
                createdAt
                slug
            }
        }
    `

    const result = await request(GraphqlAPI, query)

    return result.posts;
}

// export const getSimilarPosts = async (categories, slug) => {
//     const query = gql`
//         query GetPostDetails($slug: String!, $categories: [String!]){
//             posts(
//                 where: { slug_not: $slug, AND: {categories_some  { slug_in : $categories }}}
//                 last: 3
//             )
//         }
//     `

//     const result = await request(GraphqlAPI, query, { categories, slug })

//     return result.posts;

// }

// ----------------------------------- new


export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
          last: 3, orderBy: createdAt_DESC
        ) {
          title
          featuredimage {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result = await request(GraphqlAPI, query, { slug, categories });
  
    return result.posts;
  };

// -----------------------------

export const getCategories = async () => {
    const query = gql`
        query getCategories{
            categories{
                name
                slug
            }
        }
    `

    const result = await request(GraphqlAPI, query)

    return result.categories;

}

export const getPostDetails = async (slug) => {
    const query = gql`
        query getPostDetails($slug: String!) {
            post(where: {slug: $slug}) {
                author {
                    name
                    bio
                    photo {
                        url
                    }
                    id
                }
                createdAt
                excerpt
                slug
                title
                featuredimage {
                    url
                }
                categories {
                    name
                    slug
                }
                content{
                    html
                }
            }
        }

    `

    const result = await request(GraphqlAPI, query, { slug })

    return result.post;

}

export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}, orderBy: createdAt_DESC) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredimage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(GraphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
  };


  export const getProjects = async () => {
    const query = gql`
        query MyQuery {
          projectsConnection (orderBy: createdAt_DESC){
            edges {
              node {
                categories {
                  name
                }
                coverImage{
                  url
                }
                createdAt
                title
                slug
                excerpt
                content {
                  html
                }
              }
            }
          }
}

    `

    const result = await request(GraphqlAPI, query)

    return result.projectsConnection.edges;

}

