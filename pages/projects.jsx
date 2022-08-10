
import Head from 'next/head'
import { PostCard, PostWidget, Categories, ProjectCard } from '../components'
import Link from 'next/link';

import {GraphQLClient, gql} from 'graphql-request'

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



export default function Projects({ projects }){
  console.log(projects);

  
  return(
    <div className='container max-w-2xl mx-auto px-4 md:px-0 mb-8'>
      <Head>
        <title>Omar Jabraoui</title>
      </Head>
      <h1 className='mt-8 mb-16 text-3xl font-bold text-center '>
        Projects
      </h1>
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

