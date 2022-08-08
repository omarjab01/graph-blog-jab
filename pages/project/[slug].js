import React from 'react'
import { useRouter } from 'next/router'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, ProjectDetail, Loader } from '../../components'
import { GraphQLClient, gql } from 'graphql-request';


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
    if(router.isFallback){
        return(
            <Loader />
        )
    }
    return (
        <div className='container max-w-7xl mx-auto px-4 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <ProjectDetail
                        project={project}
                    />
                    {/* <Author 
                    author={project.author}
                /> */}
                    {/* <CommentsForm 
                    slug={project.slug}
                />
                <Comments 
                    slug={project.slug}
                /> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;