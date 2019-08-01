var React = require("react");

class LayoutNav extends React.Component {
  render() {
    return (
      <html>
            <head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"></link>
                <link rel="icon" href="img/favicon.ico" type="image/x-icon"></link>
                <link rel="stylesheet" href="/style.css"></link>
            </head>
            <header className="nav-header">
            <ul>
                <li><a href="/user">Add Entry</a></li>
                <li><a href="/log">View Past Entries</a></li>
                <li><a href="/mood">Mood Report</a></li>
                <li><a href="/faves">Favorites</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
            </header>
            <body id="nav-bodeh">
            {this.props.children}
            </body>
        </html>
    );
  }
}

module.exports = LayoutNav;