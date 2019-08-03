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
                customMessage: this.props.customMessage
        };

        let stringData = JSON.stringify(moodData);

        return (
            <LayoutScroll>

            <div className="report-header">
                <h1>Mood Report</h1>
            </div>

            <div id="report-wrapper">

                <div id="mood-container">
                    <h2>Your Primary Mood is: <span>{moodData.topMood}</span></h2>
                    <canvas id="moodChart" width="500%" height="500%"></canvas>
                </div>

                <div id="reason-container">
                    <h2>The Primary Reason is: <span>{moodData.topReason}</span></h2>
                    <canvas id="reasonChart" width="500%" height="500%"></canvas>
                </div>
                </div>{/*closing report-wrapper*/}

                <div id="podcast-container">
                <p>{moodData.customMessage}</p>
                </div>
            <script src="scripts/mood-script.js"></script>
            <script dangerouslySetInnerHTML={ {__html: `var stringData = ${stringData};`}}/>
            </LayoutScroll>
        )
    }
}

module.exports = Mood;