var React = require("react");
var Layout = require('../layouts/layout.jsx');

class Error extends React.Component {
  render() {
    return (
          <Layout>
            <div id="error-container">
                <div id="error-wrapper">
                    <h1>Something went wrong</h1>
                    <h2>Unable to display the requested page</h2>
                </div>
            </div>
          </Layout>
        )
    }
}

module.exports = Error;