var React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
            <head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"></link>
                <link rel="icon" href="img/favicon.ico" type="image/x-icon"></link>
                <link rel="stylesheet" href="/style.css"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <body>
            {this.props.children}
            </body>
        </html>
    );
  }
}

module.exports = Layout;