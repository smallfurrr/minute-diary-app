var React = require("react");
var LayoutScroll = require('../layouts/layout-scroll.jsx');

class Log extends React.Component {
    render() {

      const entryCards = this.props.rows.map(entry => {
            let day = entry.created_at.getDate();
            let month = entry.created_at.getMonth() + 1;
            let year = entry.created_at.getFullYear();
                return (
                <div className="entry-card shadow">
                    <h3>{day}-{month}-{year}</h3>
                    <p>{entry.content}</p>
                    <h4>#{entry.mood}</h4>
                    <h4>#{entry.reason}</h4>
                </div>
        )
    });

        return (
            <LayoutScroll>
                {entryCards}
            </LayoutScroll>
        )
    }
}

module.exports = Log;