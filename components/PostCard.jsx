import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='rounded-lg mb-12 grid grid-cols-1 xl:grid-cols-2 bg-white shadow-md md:grid-cols-1'>

      <Link href={`/post/${post.slug}`}>
        <img src={post.featuredimage.url} alt={post.title} className="rounded-lg cursor-pointer xl:rounded-r-none xl:rounded-lg rounded-b-none" />
      </Link>

      <div className='flex-altezza xl:flex xl:flex-col xl:justify-between xl:p-8 w-full p-4 '>
        <div className='w-full'>
          <h1 className='h1 font-semibold text-xl md:text-2xl xl:text-3xl hover:text-blue-700 transition duration-100 w-full'>
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