var React = require("react");
var LayoutScroll = require('../layouts/layout-scroll.jsx');

class Log extends React.Component {
    render() {
        return (
            <LayoutScroll>
            <h2>Waiting for entries..</h2>
            </LayoutScroll>
        )
    }
}

module.exports = Log;