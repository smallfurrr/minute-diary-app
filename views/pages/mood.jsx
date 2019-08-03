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
                customMessage: this.props.customMessage,
                customMeditations: this.props.customMeditations
        };

        let stringData = JSON.stringify(moodData);

        const meditationCards = this.props.customMeditations.map(meditation =>{

        return (
                <div className="meditation-card">
                        <h2>{meditation.title}</h2>
                        <audio controls>
                            <source src={meditation.link} type="audio/mpeg"/>
                            Your browser does not support the audio tag.
                        </audio>
                </div>
        )
    });

        return (
            <LayoutScroll>
            <br/>
            <div className="report-header">
                <h1>Your Mood Report</h1>
            </div>

            <div id="report-wrapper">

                <div id="mood-container">
                    <h2>Your Primary Mood is: <span>{moodData.topMood}</span></h2>
                    <canvas id="moodChart" width="500%" height="400%"></canvas>
                </div>

                <div id="reason-container">
                    <h2>The Primary Reason is: <span>{moodData.topReason}</span></h2>
                    <canvas id="reasonChart" width="500%" height="400%"></canvas>
                </div>
                </div>{/*closing report-wrapper*/}

            <br/>

            <div className="report-header">
                <h1>Your Recommended Listenings</h1>
            </div>

                <div id="meditation-container">
                    <div id="meditation-message">
                        <p>{moodData.customMessage}</p>
                    </div>

                    <div id="meditation-tracks">
                        {meditationCards}
                    </div>
                </div>
            <script src="scripts/mood-script.js"></script>
            <script dangerouslySetInnerHTML={ {__html: `var stringData = ${stringData};`}}/>
            </LayoutScroll>
        )
    }
}

module.exports = Mood;