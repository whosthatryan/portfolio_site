const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./components/Layout.jsx');

class Index2 extends React.Component {
    render() {
      return (
          <Layout>
            <div id='container'>
              <div id="draggable0" >
                <a href="#" className="close0"></a>
                <iframe id="leaves" src="https://player.vimeo.com/video/465501117?background=1" width="640"
                height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

                  {/* <video className="ui-widget-content"
                  playsinline
                  style={{width: '170px'}, {height: '390px'}}
                  autoPlay 
                  loop 
                  muted 
                  preload="auto">
                    <source src="../video/leaves.mp4" mimeType="video/mp4"/>
                    <source src="../video/leaves.webm" mimeType="video/webm"/>
                  </video> */}
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
