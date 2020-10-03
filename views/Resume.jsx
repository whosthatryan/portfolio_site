const React = require('React');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const product = this.props.product
      return (
          <Layout>
            <div id='draggable8' class='resume'>
              <img src="https://i.imgur.com/isi2pqW.png" alt="resume"/>
            </div>
            </Layout>
      );
    }
  }

  module.exports = Index;