import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='rounded-lg mb-12 grid grid-cols-1 2xl:grid-cols-2'>
      <Link href={`/post/${post.slug}`}>
        <img src={post.featuredimage.url} alt={post.title} className="rounded-lg cursor-pointer" />
      </Link>
      <div className='mt-4 lg:mt-0 2xl:ml-6 m-auto 2xl:flex 2xl:flex-col 2xl:justify-between h-100 2xl:py-2 flex-altezza'>
        <div>
          <h1 className='h1 font-semibold text-xl md:text-2xl xl:text-3xl hover:text-blue-700 transition duration-100'>
            <Link href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </h1>
          <span class="block text-xs inline-block w-fit my-2 py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-blue-600 text-white rounded-full">{post.categories[0].name}</span>
        </div>
        <p className='mt-2'>
          {post.excerpt}
        </p>
        <div className='flex flex-row justify-between items-center mt-2'>
          <div className='flex flex-row items-center'>
            <img src={post.author.photo.url} height="30px" width="30px" />
            <p className='font-semibold ml-2'>{post.author.name}</p>
          </div>
          <div className='font-medium'>
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard