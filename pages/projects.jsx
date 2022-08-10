
import Head from 'next/head'
import { PostCard, PostWidget, Categories, ProjectCard } from '../components'
import Link from 'next/link';

import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl6khztyd600801uqbmuqbn3c/master"
);

const QUERY = gql`
  {
    projects(orderBy: createdAt_DESC) {
        createdAt
        excerpt
        slug
        title
        featuredImage {
          url
        }
        categories {
          name
          slug
        } 
      }
  } 
`;


export async function getStaticProps() {
  const { projects } = await graphcms.request(QUERY);
  return {
    props: {
      projects,
    },
    revalidate: 30,
  };
}



export default function Projects({ projects }) {
  console.log(projects);


  return (
    <div className='container max-w-2xl mx-auto px-4 md:px-0 mb-8'>
      <Head>
        <title>Omar Jabraoui</title>
      </Head>
      <div className='search bg-gradient-to-br from-gray-700 to-gray-800 items-center flex flex-col justify-center my-8 rounded-xl p-8'>
        <h1 className='h1 font-semibold text-2xl text-white mb-2' >Projects</h1>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        {
          projects.map((project, index) => (
            <ProjectCard project={project} key={project.title} />
          ))
        }
      </div>
    </div>
  )
}

