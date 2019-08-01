var React = require("react");
var LayoutNav = require('../layouts/layout-nav.jsx');
class Logged extends React.Component {
    render() {
        return (
            <LayoutNav>
            <div id="logged-wrapper">
                <h1>Entry Logged Successfully!</h1>
                <h2>What would you like to do now?</h2>

                <button type="button" id="report-btn">View Mood Report</button>
                <button type="button" id="addentry-btn">Add Another Entry</button>
            </div>
            <script src="scripts/entry-script.js"></script>
            </LayoutNav>
        )
    }
}

module.exports = Logged;