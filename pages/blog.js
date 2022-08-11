import React, { useState } from 'react'
import {GraphQLClient, gql} from 'graphql-request'
import { PostCard } from '../components';
import SearchBox from '../components/SearchBox';
import PostCardBlog from '../components/PostCardBlog';
import Head from 'next/head';


const graphcms = new GraphQLClient(
    "https://api-eu-central-1.hygraph.com/v2/cl6khztyd600801uqbmuqbn3c/master"
);

const QUERY = gql`
    {
        posts(orderBy: createdAt_DESC){
          author {
              name
              bio
              photo {
                  url
              }
              id
          }
          createdAt
          excerpt
          slug
          title
          featuredimage {
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
    const { posts } = await graphcms.request(QUERY);
    return {
        props: {
            posts,
        },
        revalidate: 30,
    };
}

const blog = ({posts}) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
        <Head>
            <title>Blog</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="description" content="Articoli e guide gratuite su Web Design, Development, UI/UX Design e molto altro" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className='p-4 max-w-2xl mx-auto md:p-0'>
            <div className='search bg-gradient-to-br from-gray-700 to-gray-800 items-center flex flex-col justify-center my-8 rounded-xl p-8'>
                <h1 className='h1 font-semibold text-2xl text-white mb-2' >Blog</h1>
                <input 
                    type="search"
                    placeholder="Search.."
                    onChange={event => {setSearchTerm(event.target.value)}}
                    className="py-4 px-8 rounded-full"
                />
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 mb-8' >
                {
                    posts.filter((val) => {
                        if (searchTerm == ""){
                            return val
                        }
                        else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((post) => (
                        <PostCardBlog
                            post={post} key={post.title}
                        />
                    ))
                }
            </div>
        </div>
    </>
    )
}

export default blog