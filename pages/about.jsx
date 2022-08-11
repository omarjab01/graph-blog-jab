import React from 'react'
import { Author } from '../components'
import Omar from '../components/Omar'
import Socials from '../components/Socials'
import Head from 'next/head'


const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="I'm Omar Jabraoui, a frontend developer and web designer living in Italy. I design and develop websites for both companies and individuals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className='container max-w-2xl mx-auto px-4 md:px-0 my-8'>
        <div className='grid grid-cols-1 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <Omar />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <Socials />
          </div>
        </div>
      </div>
    </>
  )
}

export default about