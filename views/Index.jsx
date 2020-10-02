const React = require('React');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const product = this.props.product
      return (
          <Layout>
            <div id='main-body'>
            {/* <p id="draggable15"style={{fontSize: '30px', marginLeft: '1000px'}}>
              <a href="/wholeheartedly">
                  _back
              </a>
            </p>  */}
            <div id="container">
                <img id='draggable16' src='https://i.imgur.com/OpzOEfl.png' href='https://whosthatryan.github.io/Portfolio_8-20/plant_game/'/>
            </div>
            <div id="container">
                <img id='draggable17' src='https://i.imgur.com/v6uqnRR.png' href='https://better-bowl-front.herokuapp.com/home'/>
            </div>
            {/* <div id="container">
              <h1 className='ml-4'></h1>
              <div className='container'>
                {product.map((product, i) => {
                  return (
                    <div className='card is-inline-block mt-4 mx-5 box px-0 pt-0' style={{width: 270, border: '7px solid black', borderRadius: '10px', backgroundColor: 'white'}} key={product._id}>
                      <div className='card-image' >
                        <figure className='image is-4by4'>
                          <a href={`/wholeheartedly/${product._id}`}><img src={`${product.art}`} /></a>
                        </figure>
                      </div>
                      <div className='card-content' style={{textAlign: 'center'}}>
                        <p style={{fontSize: '40px'}} className='title is-6'>
                          {product.name}
                        </p>
                        <p style={{fontSize: '25px', }}>
                          { product.title }
                        </p>
                        <p className='subtitle is-7'>{product.isForSale
                         ? `.available`
                         : `.unavailable`}
                        </p>
                        <form id="delete" action={`/wholeheartedly/${product._id}?_method=DELETE`} method="POST">
                            <input type="submit" value={`Delete`}/>
                        </form>
                  </div>
                </div>
                  );
                })}
              </div>

        </div> */}
        </div>
            </Layout>
      );
    }
  }

  module.exports = Index;