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
                <script type="text/javascript" src="chartjs-plugin-colorschemes.js"></script>
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
            <body id="scroll-bodeh">
            {this.props.children}
            </body>
        </html>
    );
  }
}

module.exports = LayoutScroll;