
import Head from 'next/head'
import { PostCard, PostWidget, Categories, ProjectCard } from '../components'
import Link from 'next/link';

import {GraphQLClient, gql} from 'graphql-request'

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl6khztyd600801uqbmuqbn3c/master"
);

const QUERY = gql`
  {
    projects {
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
    <div className='container max-w-7xl mx-auto px-4 mb-8'>
      <Head>
        <title>Omar Jabraoui</title>
      </Head>
      <h1>
        💼 Projects
      </h1>
        <div className='grid md:col-span-3 grid-cols-1 xl:grid-cols-2 md:grid-cols-2 gap-16' >
          {
            projects.map((project, index) => (
              <ProjectCard project={project} key={project.title} />
            ))
          }
        </div>
    </div>
  )
}

