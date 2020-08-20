const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '30px'}}>.submit</h1>
            <form action="/wholeheartedly" method="POST">
                .name  <input type="text" name="name" /><br/>
                .description  <input type="text" name="description" /><br/>
                .image  <input type="text" name="img" /><br/>
                .price  <input type="number" name="price" /><br/>
                .available  <input type="checkbox" name="isForSale" /><br/>
                <input type="submit" name="" value=".submit"/>
             </form>
             <nav>
                <a href={`/wholeheartedly`}>.back</a>
            </nav>
        </div>
      </Layout>
    )
  }
}

module.exports = New;