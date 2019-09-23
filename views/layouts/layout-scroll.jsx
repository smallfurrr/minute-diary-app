var React = require("react");

class LayoutScroll extends React.Component {
  render() {
    return (
      <html>
            <head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"></link>
                <link rel="icon" href="img/favicon.ico" type="image/x-icon"></link>
                <link rel="stylesheet" href="/style.css"></link>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <header className="nav-header">
            <div id="logo"><a href="/user"><img src="img/logo.png"/></a></div>
            <ul>
                <li><a href="/user">Add Entry</a></li>
                <li><a href="/log">View Past Entries</a></li>
                <li><a href="/mood">Mood Report</a></li>
                <li><a href="/faves">Favorites</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
            </header>
            <body id="scroll-bodeh">
            {this.props.children}
            </body>
        </html>
    );
  }
}

module.exports = LayoutScroll;