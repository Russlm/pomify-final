// import { NextApiRequest, NextApiResponse } from 'next';
// const{ Client } = require('pg')


// export default async function test(res, res) {
//   if (req.method !== "GET") {
//     res.status(500).json({message: "return error here."})
    
//   }
//   res.status(200).json({message: 'HELLO FROM RUSSELL'})
//   await client.connect()
// }
// function Page({data}) {

// }

export async function getServerSideProps() {
  return {
    props: {msg: "text"}
  }
}
// const Sup = ({message}) => {
//   return ( 
//     <>
//       <h1>{message}</h1>
//     </>
//   )
// }


// export const getServerSideProps = (context) => {
//   return {
//     props: { message: `Next.js is awesome` }, // will be passed to the page component as props
//   }
// }

// export default Sup; 