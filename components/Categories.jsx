import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-white shadow-md rounded-lg p-8 mb-8'>

      <h1 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h1>
      <div className="flex flex-col gap-2" >
      {
        categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='font-base text-base max-w-10 cursor-pointer hover:font-semibold'>
              {category.name}
            </span>
          </Link>
        ))
      }
      </div>
      

    </div>
  )
}

export default Categories