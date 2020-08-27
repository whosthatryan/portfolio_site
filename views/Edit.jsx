const React = require('react');
const Layout = require('./components/Layout.jsx');

class Edit extends React.Component {
  render() {
    const product = this.props.product;
    // const id = this.props.id;
    return (
      <Layout>
          <p id="draggable12"style={{fontSize: '50px', marginLeft: '1000px'}}>
            <a href="/wholeheartedly/index">
                .back
            </a>
          </p> 
        <div id="draggable11" style={{textAlign: 'center'}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '30px', marginTop: '10px', marginBottom: '15px'}}>.edit</h1>
            <form action={`/wholeheartedly/${product._id}?_method=PUT`} method="POST">
                .name  <input type="text" name="name" defaultValue={product.name}/><br/>
                .title  <input type="text" name="title" defaultValue={product.title}/><br/>
                .art  <input type="text" name="art" defaultValue={product.art}/><br/>
                .audio  <input type="text" name="audio" defaultValue={product.audio}/><br/>
                .video  <input type="text" name="video" defaultValue={product.video}/><br/>
                .available  <input type="checkbox" defaultValue="isForSale" 
                onChange={product.isForSale}/><br/>
                <div style={{marginBottom: '15px', marginTop: '10px'}}>
                  <input  type="submit" name="" value=".submit changes"/>
                </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

module.exports = Edit;