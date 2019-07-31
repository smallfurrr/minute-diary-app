var React = require("react");
var Layout = require('../layouts/layout.jsx');

class Home extends React.Component {
  render() {
    return (
          <Layout>
          <div className = "home-left">
            <h1>minute.</h1>
            <img src="img/cloud3.png"/>
            <h2>A Self-Care Diary App For Busy People</h2>
          </div>
          </Layout>
        )
    }
}

module.exports = Home;