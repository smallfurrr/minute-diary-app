var React = require("react");
var LayoutNav = require('../layouts/layout-nav.jsx');

class User extends React.Component {
  render() {
    return (
          <LayoutNav cookies={this.props.cookies}>
          <div className="user-wrapper">
          <h1 className="user-greeting">Hello {this.props.name}</h1>
          </div>
          </LayoutNav>
        )
    }
}

module.exports = User;