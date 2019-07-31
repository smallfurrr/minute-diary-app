var React = require("react");
var Layout = require('../layouts/layout.jsx');

class Register extends React.Component {
  render() {
    return (
          <Layout>
          <div className="reg-header">
          <h1>minute.</h1>
          <h2>Registration</h2>
          </div>
          </Layout>
        )
    }
}

module.exports = Register;