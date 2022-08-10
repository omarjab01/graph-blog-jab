import React from 'react'

import { getPosts, getPostDetails } from '../../services';
import { useRouter } from 'next/router'

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components'

const PostDetails = ({post}) => {
    const router = useRouter();
    if(router.isFallback){
        return(
            <Loader />
        )
    }
  return (
    <div className='container max-w-2xl mx-auto px-4 md:p-0 mb-8'>
        <div className='grid grid-cols-1'>
            <div className='col-span-1'>
                <PostDetail 
                    post={post}
                />
                <Author 
                    author={post.author}
                />
                {/* <CommentsForm 
                    slug={post.slug}
                />
                <Comments 
                    slug={post.slug}
                /> */}
            </div>
            {/* <div className='col-span-1 lg:col-span-4'>
                <PostWidget 
                    slug={post.slug} categories={post.categories.map((category) => category.slug)}
                /> 
                <Categories />
            </div> */}

        </div>
    </div>
  )
}

export default PostDetails;

export async function getStaticProps({params}){
    const data = await getPostDetails(params.slug);
  
    return {
      props: { post: data }
    }
}

export async function getStaticPaths(){
    const posts = await getPosts();
    return {
        paths: posts.map(({ node : { slug }}) => ({ params : { slug }})),
        fallback: true,
    }
}