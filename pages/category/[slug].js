import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import Head from 'next/head';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  const [searchCategory, setSearchCategory] = useState("");

  if (router.isFallback) {
    return <Loader />;
  }

  const titolo = posts[0].node.categories[0].name

  return (
    <>
      <Head>
        <title>{titolo}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={`Post relativi a ${titolo}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    
    <div className="container max-w-2xl mx-auto px-4 md:px-0 mb-8">
      <div className='search bg-gradient-to-br from-gray-700 to-gray-800 items-center flex flex-col justify-center my-8 rounded-xl p-8'>
        
        
        <h1 className='h1 font-semibold text-2xl text-white' >Blog</h1>
        <input
          type="search"
          placeholder="Search.."
          onChange={event => { setSearchCategory(event.target.value) }}
          className="py-4 px-8 rounded-full input-category mb-4"
        />
        

      </div>

      <div className='flex flex-row items-center my-4 text-black'>
          <Link href="/blog">
            <h1 className='h1 font-semibold text-lg cursor-pointer'>Blog ></h1>
          </Link>
          <h1 className='ml-2'>{posts[0].node.categories[0].name}</h1>
        </div>


      <div className="grid col-span-1 gap-12">
        {posts.filter((val) => {
          if (searchCategory == "") {
            return val
          }
          else if (val.node.title.toLowerCase().includes(searchCategory.toLowerCase())) {
            return val
          }
        }).map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
    </div>
    </>
  );
};


export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}