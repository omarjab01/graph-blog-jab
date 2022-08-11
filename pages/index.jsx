
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'

import { GraphQLClient, gql } from 'graphql-request'
import Link from 'next/link';
import Profilo from '../components/Profilo';

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl6khztyd600801uqbmuqbn3c/master"
);

const QUERY = gql`
  {
      posts(orderBy: createdAt_DESC, first: 3){
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
`;


export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    <div className='container max-w-2xl mx-auto mb-8'>
      <Head>
        <title>Omar Jabraoui</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={posts[0].author.bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='grid grid-cols-1 p-4 md:p-0'>

        <Profilo />

        <div className='mt-6'>
          <div className='flex flex-row justify-between my-3 sm:my-6'>
            <h1 className='h1 font-semibold text-lg' >Recent Posts</h1>
            {/* <Categories /> */}
            <Link href="/blog">
              <a>See More</a>
            </Link>
          </div>

          <div className='grid grid-cols-1 sm:gap-8 gap-12'>
            {
              posts.map((post, index) => (
                <PostCard post={post} key={post.title} />
              ))
            }
          </div>
        </div>

        {/* <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Categories />
            <PostWidget />
          </div>
        </div> */}
      </div>
    </div>
  )
}

// export async function getStaticProps(){
//   const posts = (await getPosts()) || [];

//   return {
//     props: {
//       posts
//     },
//   }
// }

