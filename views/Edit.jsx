const React = require('react');
const Layout = require('./components/Layout.jsx');

class Edit extends React.Component {
  render() {
    const product = this.props.product;
    // const id = this.props.id;
    return (
      <Layout>
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '30px'}}>.edit</h1>
        <form action={`/wholeheartedly/${product._id}?_method=PUT`} method="POST">
        .name  <input type="text" name="name" value={product.name}/><br/>
        .description  <input type="text" name="description" value={product.description}/><br/>
        .image  <input type="text" name="img" value={product.img}/><br/>
        .price  <input type="number" name="price" value={product.price}/><br/>
        .available  <input type="checkbox" name="isForSale" value={product.isForSale}/><br/>
        <input type="submit" name="" value=".submit changes"/>
            </form>
        <button>
            <a href="/wholeheartedly">.back</a>
        </button>
      </div>
      </Layout>
    )
  }
}

module.exports = Edit;