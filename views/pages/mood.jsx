var React = require("react");
var LayoutScroll = require('../layouts/layout-scroll.jsx');

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
            <LayoutScroll>
            <div id="report-wrapper">
                <h1>Mood Report</h1>

                <div id="mood-container">
                    <h2>Your Primary Mood is: <span>{moodData.topMood}</span></h2>
                    <canvas id="moodChart" height="80"></canvas>
                </div>

                <div id="mood-container">
                    <h2>The Primary Reason is: <span>{moodData.topReason}</span></h2>
                    <canvas id="reasonChart" height="80"></canvas>
                </div>
            </div>
            <script src="scripts/mood-script.js"></script>
            <script dangerouslySetInnerHTML={ {__html: `var stringData = ${stringData};`}}/>
            </LayoutScroll>
        )
    }
}

module.exports = Mood;