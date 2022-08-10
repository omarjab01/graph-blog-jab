import Link from 'next/link'
import React from 'react'

const Socials = () => {
    return (
        <div className='bg-white shadow-md rounded-lg p-8 mb-8'>

            <h1 className='text-xl mb-8 font-semibold border-b pb-4'>
                Get in touch with me
            </h1>
            <ul className='flex flex-col gap-2'>
                <li>
                    <a href="mailto:omarjab01@gmail.com" className='flex flex-row items-center'>
                        <img src="/icons/email.svg" height="20px" width="20px" /><h6 className='ml-4'>omarjab01@gmail.com</h6>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/omarjab/" target="__blank" className='flex flex-row items-center'>
                        <img src="/icons/linkedin.svg" height="20px" width="20px" /><h6 className='ml-4'>Linkedin</h6>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/omarjab.design/" target="__blank" className='flex flex-row items-center'>
                        <img src="/icons/instagram.svg" height="20px" width="20px" /><h6 className='ml-4'>Instagram</h6>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/omarjab01" target="__blank" className='flex flex-row items-center'>
                        <img src="/icons/github.svg" height="20px" width="20px" /><h6 className='ml-4'>OmarJab01</h6>
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/omarjab" target="__blank" className='flex flex-row items-center'>
                        <img src="/icons/behance.svg" height="20px" width="20px" /><h6 className='ml-4'>OmarJab</h6>
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Socials