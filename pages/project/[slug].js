import React from 'react'
import { useRouter } from 'next/router'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, ProjectDetail, Loader } from '../../components'
import { GraphQLClient, gql } from 'graphql-request';
import Head from 'next/head';


const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl6khztyd600801uqbmuqbn3c/master"
);

const QUERY = gql`
    query project($slug: String!) {
      project(where: { slug: $slug }) {
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
        content{
            html
        }
      }
    }
  `;
const SLUGLIST = gql`
    {
      projects {
        slug
      }
    }
  `;

export async function getStaticPaths() {
  const { projects } = await graphcms.request(SLUGLIST);
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const project = data.project;
  return {
    props: {
      project,
    },
    revalidate: 30,
  };
}

const ProjectDetails = ({ project }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Loader />
    )
  }
  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={project.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='container max-w-2xl mx-auto p-4 md:p-0 mb-8'>
        <div className='grid grid-cols-1 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <ProjectDetail
              project={project}
            />

          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails;