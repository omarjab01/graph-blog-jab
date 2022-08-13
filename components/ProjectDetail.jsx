import React from 'react'
import moment from 'moment'
import Head from 'next/head'


const ProjectDetail = ({ project }) => {

    return (
        <>
        <div className='rounded-lg mb-8 border-b pb-8'>
            
            <div className='my-4'>
                <h1 className='font-semibold text-3xl'>{project.title}</h1>
                <span className="block text-xs inline-block w-fit my-2 py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-blue-600 text-white rounded-full">{project.categories[0].name}</span>
                
                <p className='my-2'>
                    {project.excerpt}
                </p>
            </div>
            <div className=''>
                <img
                    src={project.featuredImage.url}
                    alt={project.title}
                    className="rounded-2xl"
                />
            </div>
        </div>
        <div className='my-8 body-post' dangerouslySetInnerHTML={{__html: project.content.html}}>
        </div>
        </>
    )
}

export default ProjectDetail