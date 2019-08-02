var React = require("react");
var LayoutNav = require('../layouts/layout-nav.jsx');

class Mood extends React.Component {
    render() {

        let moodData = {
                moodCountArray: this.props.moodCountArray,
                moodNameArray: this.props.moodNameArray,
                topMood: this.props.topMood,
                reasonCountArray: this.props.reasonCountArray,
                reasonNameArray: this.props.reasonNameArray,
                topReason: this.props.topReason,
        };

        let stringData = JSON.stringify(moodData);

        return (
            <LayoutNav>
            <div id="report-wrapper">
                <h1>Mood Report</h1>

                <h2>Your Primary Mood is: <span>{moodData.topMood}</span></h2>

                <div className="container">
                    <canvas id="myChart" height="80"></canvas>
                </div>
            </div>
            <script src="scripts/mood-script.js"></script>
            <script dangerouslySetInnerHTML={ {__html: `var stringData = ${stringData};`}}/>
            </LayoutNav>
        )
    }
}

module.exports = Mood;