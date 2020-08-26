const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
  render() {
    return (
      <Layout>
        <p id="draggable12"style={{fontSize: '50px', marginLeft: '1000px'}}>
          <a href="/wholeheartedly">
              .back
          </a>
        </p> 
        <div id="draggable7" style={{textAlign: 'center'}}>
          <div style={{textAlign: 'center'}}>
              <h1 style={{fontSize: '30px', marginTop: '10px', marginBottom: '15px'}}>.submit</h1>
              <form action="/wholeheartedly" method="POST">
                  .name  <input type="text" name="name" /><br/>
                  .title  <input type="text" name="title" /><br/>
                  .art  <input type="text" name="art" /><br/>
                  .audio(wav)  <input type="text" name="audio" /><br/>
                  .video(mp4/webm)  <input type="text" name="video" /><br/>
                  .available  <input type="checkbox" name="isForSale" /><br/>
                  <div style={{marginBottom: '15px', marginTop: '10px'}}>
                  <input  type="submit" name="" value=".submit"/>
                  </div>
              </form>
          </div>
        </div>
      </Layout>
    )
  }
}

module.exports = New;