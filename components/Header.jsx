import React, { useContext } from 'react'

import Link from 'next/link'

const categories = [
    {
        name: "Web Development", slug: "web-dev"
    },
    {
        name: "Design", slug: "design"
    },
    {
        name: "News", slug: "news"
    }
]

const Header = () => {
    return (
        <div className='bg-gray-700 w-full'>
            <div className='container mx-auto max-w-7xl p-4 py-6 mb-8 md:py-6 flex flex-row align-middle justify-between text-white'>
                <div className='mb:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-xl text-dark'>
                            Omar Jabraoui
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="/projects" >
                        <span className='mr-4 cursor-pointer'>Portfolio</span>
                    </Link>
                    <Link href="/about">
                        <span className='cursor-pointer'>About</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header