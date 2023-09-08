
// import React, { useEffect } from "react";
// import { useLazyQuery, gql } from '@apollo/client';

// const CATS_QUERY = gql`
// query GetCats {
//     categories
//     {
//       title
//       idn
//     }
// }
// `;




// const  Home = () => {

//     const [hi,{ loading, error, data }] = useLazyQuery(CATS_QUERY);
    
//     useEffect(()=>{
//       console.log("oops",data)
//       !data && hi()
//     },[])
  
//     console.log("homeee")
//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;
//     return (  
//       <div id ="shop">
//          <div className="catss">
//                   {
//                       data?.categories.map((cat)=> <Category key={cat.id+"cat"} title={cat.title} addToCart={addToCart}/>)
//                   }
//               </div>
//       </div>
//       // <>Hello World
//       // {console.log(data)}
//       // {data?.categories.map((category) => (
//       //     <div key={category.idn}>
//       //       {category.title}
//       //     </div>
//       //   ))}
//       // </>
//     );
//   }
   
//   export default Home;