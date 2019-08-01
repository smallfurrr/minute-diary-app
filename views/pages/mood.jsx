var React = require("react");
var LayoutNav = require('../layouts/layout-nav.jsx');

class Mood extends React.Component {
    render() {
        let moodData = {
            moodArray: this.props.moodArray,
            reasonArray: this.props.reasonArray,
            topMood: this.props.topMood,
            topReason: this.props.topReason
        };

        let stringData = JSON.stringify(moodData);
        {/*console.log(stringData);*/}

        return (
            <LayoutNav cookies={this.props.cookies}>
                <h1>Mood Report</h1>
            <script src="scripts/mood-script.js"></script>
            </LayoutNav>
        )
    }
}

module.exports = Mood;