import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);


  return (
    <div className='bg-white shadow-md rounded-lg p-8 mb-8'>

      <h1 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? "Related Posts" : "Recent Posts"}
      </h1>
      {
        relatedPosts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slug}`}>
          <div key={post.title} className="flex flex-row flex-grow items-center justify-between my-4 cursor-pointer hover:text-blue-500 transition duration-300">
              <div className='text-base max-w-10 font-medium'>
                ✅ {post.title}
              </div>
              <div className='ml-2 text-right text-sm'>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </div>
          </div>
          </Link>
        ))
      }

    </div>
  )
}

export default PostWidget