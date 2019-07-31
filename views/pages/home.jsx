var React = require("react");
var Layout = require('../layouts/layout.jsx');

class Home extends React.Component {
  render() {
    return (
          <Layout>
          <h1>Hello.</h1>
          </Layout>
        )
    );
  }
}

module.exports = Home;