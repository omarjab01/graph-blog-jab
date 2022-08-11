import React from 'react'
import {GraphQLClient, gql} from 'graphql-request'
import Link from 'next/link';

// const graphcms = new GraphQLClient(
//   "https://api-eu-central-1.hygraph.com/v2/cl6khztyd600801uqbmuqbn3c/master"
// );

// const QUERY2 = gql`
//   query MyQuery {
//   author(where: {id: "cl6kigyonll6t0bus9l6xh2rk"}) {
//     bio
//     name
//     photo {
//       url
//     }
//   }
// }
// `;


// export async function getStaticProps() {
//   const { author } = await graphcms.request(QUERY);
//   return {
//     props: {
//       author,
//     },
//     revalidate: 30,
//   };
// }

const Profilo = ({author}) => {
  return (
    <div className='grid grid-cols-6 bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-lg gap-4 text-white justify-start my-2 md:my-6'>
        
        <Link href="/">
          <img src="/omar.png" alt="Omar Jabraoui" className="rounded-full cursor-pointer col-span-1" />
        </Link>

        <div className='col-span-5'>
          <h1 className='md:text-xl h1 font-semibold text-md'>Hello 👋</h1><h1 className='md:text-xl h1 font-semibold text-md'>I'm Omar Jabraoui</h1>
          <p className='text-gray-400 text-sm md:text-base'>I love designing and making awesome web apps, crafting beautiful websites and improving user experience.</p>
        </div>


    </div>
  )
}

export default Profilo