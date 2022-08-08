import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-gray-700 w-full'>
            <div className='container mx-auto max-w-7xl p-4 py-6 md:py-6 flex flex-row align-middle justify-between text-white'>
                <div className='mb:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer font-base text-md'>
                            Copyright © 2022 Omar Jabraoui
                        </span>
                    </Link>
                </div>
                <div className='hidden md:block'>
                    <Link href="/blog" >
                        <span className='mr-4'>Blog</span>
                    </Link>
                    <Link href="/about">
                        <span>About</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer