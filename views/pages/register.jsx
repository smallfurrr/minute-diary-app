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

          <div className="reg-form">
              <form method="POST" action="/users" id="register-form">
              <input type="text" name="first_name" className="reg-name" placeholder="First Name"/>
              <input type="text" name="last_name" className="reg-name" placeholder="Last Name"/>
              <input type="text" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder="Password"/>
              <button type="submit">Register</button>
          </form>
          </div>
          </Layout>
        )
    }
}

module.exports = Register;