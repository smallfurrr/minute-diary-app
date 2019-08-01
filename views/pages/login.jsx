var React = require("react");
var Layout = require('../layouts/layout.jsx');

class Login extends React.Component {
  render() {
    return (
          <Layout>
          <div id="login-wrapper">
            <h1>Registration Successful</h1>
            <h2>Please Login Below</h2>
            <form method="POST" action="/user" id="login-form" autocomplete="off">
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button type="submit">Login</button>
            </form>
          </div>
          </Layout>
        )
    }
}

module.exports = Login;