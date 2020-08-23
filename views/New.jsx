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
                .title  <input type="text" name="title" /><br/>
                .art  <input type="text" name="art" /><br/>
                .audio  <input type="text" name="audio" /><br/>
                .video  <input type="text" name="video" /><br/>
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