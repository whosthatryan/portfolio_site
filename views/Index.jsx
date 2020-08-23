// const React = require('React');
// const Layout = require('./components/Layout.jsx');

// class Index extends React.Component {
//     render() {
//         const product = this.props.product
//       return (
//           <Layout>
//             <div>
//               <h1 className='ml-4'></h1>
//               <div className='container'>
//                 {product.map((product, i) => {
//                   return (
//                     <div className='card is-inline-block mt-4 mx-5 box px-0 pt-0' style={{width: 270}} key={product._id}>
//                       <div className='card-image' >
//                         <figure className='image is-4by4'>
//                           <a href={`/wholeheartedly/${product._id}`}><img src={`${product.img}`} /></a>
//                         </figure>
//                       </div>
//                       <div className='card-content'>
//                         <p className='title is-6'>
//                           {product.name}
//                         </p>
//                         <p>
//                           { product.description }
//                         </p>
//                         <p className='subtitle is-7'>
//                           ${product.price}</p>
//                         <p className='subtitle is-7'>{product.isForSale
//                          ? `.available`
//                          : `.unavailable`}
//                         </p>
//                   </div>
//             </div>
//                   );
//                 })}
//               </div>
//             </div>
//             </Layout>
//       );
//     }
//   }

//   module.exports = Index;