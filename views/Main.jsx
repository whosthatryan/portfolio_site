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
                  <video className="ui-widget-content"
                  style={{width: '170px'}, {height: '390px'}}
                  autoPlay 
                  loop 
                  muted 
                  poster="../images/leavepic.png"
                  preload="auto">
                    <source src="../video/leaves.mp4" type="video/mp4"/>
                    <source src="../video/leaves.webm" type="video/webm"/>
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
