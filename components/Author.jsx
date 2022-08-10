import Link from 'next/link'
import React from 'react'

const Author = ({author}) => {
  return (
    <div className='flex flex-row bg-gray-800 p-8 rounded-3xl items-center'>
      <img 
        src={author.photo.url}
        height="64px"
        width="64px"
        alt={author.name}

      />
      <div className='text-white ml-8'>
        <h1 className='text-base md:text-xl font-medium'>{author.name}</h1>
        <h6 className='text-gray-400'>{author.bio}</h6>
          <p className='text-gray-400'>
            If you want to contact me, feel free to use my email -> 
            <Link href='mailto:omarjab01@gmail.com'>
              <a className='text-blue-500'>omarjab01@gmail.com</a>
            </Link>
          </p>
      </div>
    </div>
  )
}

export default Author