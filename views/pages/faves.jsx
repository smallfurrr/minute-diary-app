var React = require("react");
var LayoutScroll = require('../layouts/layout-scroll.jsx');

class Faves extends React.Component {
    render() {

        let podcastCards = this.props.userFaves.rows.map(podcast =>{

            let emptyUrl = "img/empty-heart.png";
            let filledUrl = "img/filled-heart.png";

            let imgUrl = this.props.faveArray.includes(podcast.podcast_id) ? filledUrl : emptyUrl;

            return (
            <div className="podcast-card">
                    <h2>{podcast.title}</h2>
                    <br/>
                    <audio controls>
                            <source src={podcast.link} type="audio/mpeg"/>
                            Your browser does not support the audio tag.
                    </audio>
                    <input type="image" src={imgUrl} value={podcast.podcast_id} className="heart-button" height="20px"/>
            </div>
            )
    });

        return (
            <LayoutScroll>
                <br/>
                <div className="report-header">
                    <h1>Your Favorite Tracks</h1>
                </div>

                <div id="fave-container">
                    {podcastCards}
                </div>
            <script src="scripts/fave-script-remove.js"></script>
            </LayoutScroll>
        )
    }
}

module.exports = Faves;