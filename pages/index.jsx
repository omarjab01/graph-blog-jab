
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services' 

import {GraphQLClient, gql} from 'graphql-request'




export default function Home({posts}){
  return(
    <div className='container max-w-7xl mx-auto px-4 mb-8'>
      <Head>
        <title>Omar Jabraoui</title>
      </Head>
      <div className='grid grid-cols-1 xl:grid-cols-12 xl:gap-12 lg:grid-cols-2 md:grid-cols-1'>
        
        <div className='lg:col-span-8 col-span-1 grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-2 xl:grid-cols-1'>
          {
            posts.reverse().map((post, index) => (
              <PostCard post={post} key={post.title} />
            ))
          }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Categories />
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

// export async function getStaticProps(){
//   const posts = (await getPosts()) || [];

//   return {
//     props: {
//       posts
//     },
//   }
// }

