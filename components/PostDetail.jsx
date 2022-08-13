import React from 'react'
import moment from 'moment'
import Head from 'next/head'




const PostDetail = ({ post }) => {

    // const getContentFragment = (index, text, obj, type) => {
    //     let modifiedText = text;

    //     if (obj) {
    //         if (obj.bold) {
    //             modifiedText = (<b key={index}>{text}</b>);
    //         }

    //         if (obj.italic) {
    //             modifiedText = (<em key={index}>{text}</em>);
    //         }

    //         if (obj.underline) {
    //             modifiedText = (<u key={index}>{text}</u>);
    //         }
    //     }

    //     switch (type) {
    //         case 'heading-three':
    //             return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
    //         case 'paragraph':
    //             return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
    //         case 'heading-four':
    //             return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
    //         case 'image':
    //             return (
    //                 <img
    //                     key={index}
    //                     alt={obj.title}
    //                     height={obj.height}
    //                     width={obj.width}
    //                     src={obj.src}
    //                 />
    //             );
    //         default:
    //             return modifiedText;
    //     }
    // };


    return (
        <>
        <Head>
            <title>{post.title}</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="description" content={post.excerpt} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className='rounded-lg mb-8 border-b pb-8'>
            
            <div className='my-4'>
                <h1 className='font-semibold text-3xl'>{post.title}</h1>
                <span class="block text-xs inline-block w-fit my-2 py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-blue-600 text-white rounded-full">{post.categories[0].name}</span>
                
                {/* <p className='my-2'>
                    {post.excerpt}
                </p> */}
            </div>
            
            <div className='flex flex-row justify-between items-center mt-2 mb-8'>
                <div className='flex flex-row items-center'>
                    <img src={post.author.photo.url} height="30px" width="30px" alt={post.title}/>
                    <p className='font-semibold ml-2'>{post.author.name}</p>
                </div>
                <div className='font-medium'>
                    {moment(post.createdAt).format("MMM DD, YYYY")}
                </div>
            </div>
            <div className=''>
                <img
                    src={post.featuredimage.url}
                    alt={post.title}
                    className="rounded-2xl"
                />
            </div>
        </div>
        <div className='my-8 body-post' dangerouslySetInnerHTML={{__html: post.content.html}}>
                {/* {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => {
                        getContentFragment(itemIndex, item.text, item)

                        return getContentFragment(index, children, typeObj, typeObj.type)
                    })
                })} */}
        </div>
        </>
    )
}

export default PostDetail