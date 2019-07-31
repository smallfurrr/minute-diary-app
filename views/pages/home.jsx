var React = require("react");
var Layout = require('../layouts/layout.jsx');

class Home extends React.Component {
  render() {
    return (
          <Layout>
          <div id="home-wrapper">

              <div className = "home-left">
                <h1>minute.</h1>
                <img src="img/cloud3.png"/>
                <h2>A Self-Care Diary App For Busy People</h2>
              </div>

              <div className = "home-right">
                <h3>Existing Users</h3>
                <form method="POST" action="/user" id="login-form">
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
                <br/>
                <h3>New User?</h3>
                <button type="submit" id="register-btn">Register</button>
                <script src="scripts/register-script.js"></script>
              </div>

          </div>
          </Layout>
        )
    }
}

module.exports = Home;