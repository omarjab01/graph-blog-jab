import React, { useContext } from 'react'

import Link from 'next/link'


const Header = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto max-w-2xl md:p-0 p-4 py-6 md:py-6 flex flex-row align-middle justify-between border-b'>
                <div className='mb:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-xl text-dark'>
                            Omar Jabraoui
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="/blog" >
                        <span className='mr-4 cursor-pointer'>Blog</span>
                    </Link>
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