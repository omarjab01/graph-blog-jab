
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services' 



export default function Home({posts}){
  return(
    <div className='container max-w-7xl mx-auto px-4 mb-8'>
      <Head>
        <title>Omar Jabraoui</title>
      </Head>
      <div className='grid grid-cols-1 xl:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1' >
          {
            posts.map((post, index) => (
              <PostCard post={post.node} key={post.node.title} />
            ))
          }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts
    }
  }
}

