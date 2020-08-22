const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./components/Layout.jsx');

class Index2 extends React.Component {
    render() {
    // const product = this.props.product
      return (
          <Layout>
              <div>
                  <div id="draggable">
                  <div id="mydivheader" className="handle">.wholeheartedly</div>
                    <video style={{borderRadius: "5%"}} controls width="400" height="400"
                    autoplay loop muted preload="auto" 
                    poster="images/storm.png">
                      <source src="../video/storm.mp4" type="video/mp4"/>
                      <source src="../video/storm.webm" type="video/webm"/>
                      <p>Your browser doesn't support HTML video. Here is a <a href="storm.mp4">link to the video</a> instead.</p>
                    </video>
                  </div>
              </div>
          </Layout>
      );
    }
  }

  if (typeof window !== 'undefined') {
    ReactDOM.render(<Index2/>, document.body);
}

module.exports = Index2;