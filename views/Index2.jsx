const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./components/Layout.jsx');

class Index2 extends React.Component {
    render() {
    // const product = this.props.product
      return (
          <Layout>
              <div id="container">
                    <video id="draggable" className="ui-widget-content"
                    style={{width: '170px'}, {height: '390px'}} controls
                    autoPlay 
                    loop 
                    muted 
                    preload="auto" 
                    poster="images/storm.png">
                      <source src="../video/stormslow.mp4" type="video/mp4"/>
                      <source src="../video/stormslow.webm" type="video/webm"/>
                      <p>Your browser doesn't support HTML video. Here is a <a href="storm.mp4">link to the video</a> instead.</p>
                    </video>
                  </div>
                  <div id="draggable2" className="ui-widget-content">
                    <div id="mydivheader">.half</div>
                    <audio controls>
                      <source src="../audio/half4.mp3" type="audio/mpeg"/>
                      <source src="../audio/half4.wav" type="audio/wav"/>
                    Your browser does not support the audio element.
                    </audio>
                  </div>
          </Layout>
      );
    }
  }

  if (typeof window !== 'undefined') {
    ReactDOM.render(<Index2/>, document.body);
}

module.exports = Index2;