import React from 'react'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
  return (
    <div className='rounded-lg mb-12 grid grid-cols-1'>
      <Link href={`/project/${project.slug}`}>
        <img src={project.featuredImage.url} alt={project.title} className="rounded-lg cursor-pointer" />
      </Link>
      <div className='mt-4 flex flex-col justify-between p-0'>
        <div>
          <h1 className='h1 font-semibold text-xl md:text-2xl xl:text-3xl hover:text-blue-700 transition duration-100'>
            <Link href={`/project/${project.slug}`}>
              {project.title}
            </Link>
          </h1>
          <div className='flex flex-wrap'>
            <span class="block text-xs inline-block w-fit my-2 py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-blue-600 text-white rounded-full">{project.categories[0].name}</span>
          </div>
        </div>
        <p className='mt-2'>
          {project.excerpt}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard