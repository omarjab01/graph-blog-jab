import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCardBlog = ({ post }) => {
    console.log(post)
    return (
        <div className='rounded-lg grid grid-cols-1 sm:grid-cols-2 sm:bg-transparent '>

            <Link href={`/post/${post.slug}`}>
                <img src={post.featuredimage.url} alt={post.title} className="rounded-lg cursor-pointer sm:col-span-12" />
            </Link>

            <div className='flex-altezza md:flex md:flex-col md:justify-between w-full sm:px-4 sm:col-span-2 md:col-span-12 md:p-1 px-2 mt-4 md:mt-1'>
                <h1 className='h1 font-semibold text-xl md:text-2xl hover:text-blue-700 transition duration-100 w-full'>
                    <Link href={`/post/${post.slug}`}>
                        {post.title}
                    </Link>
                </h1>

                <div className='flex flex-row justify-between items-center'>
                    <Link href={`/category/${post.categories[0].slug}`}>
                        <span class="block cursor-pointer text-xs inline-block w-fit my-2 py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-blue-500 text-white rounded-full">{post.categories[0].name}</span>
                    </Link>
                    <div className='font-medium'>
                        {moment(post.createdAt).format("MMM DD, YYYY")}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostCardBlog