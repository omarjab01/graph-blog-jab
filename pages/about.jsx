import React from 'react'
import { Author } from '../components'
import Omar from '../components/Omar'
import Socials from '../components/Socials'

const about = () => {
  return (
    <div className='container max-w-7xl mx-auto px-4 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <Omar />
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <Socials />
            </div>

        </div>
    </div>
  )
}

export default about