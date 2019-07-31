var React = require("react");
var LayoutNav = require('../layouts/layout-nav.jsx');
class User extends React.Component {
    render() {
        return (
            <LayoutNav cookies={this.props.cookies}>
            <div className="user-wrapper">
                <h1>Hello {this.props.name}</h1>
                <h2>How are you feeling today?</h2>
                <form method="POST" action="/user" id="entry-form">
                    <textarea name="content" rows="5" cols="30" maxlength="500" placeholder="Let it out.."></textarea>

                <div id="mood-selection">
                    <label for="happy"><img src="img/happy.png" alt="happy"/><br/>Happy</label><br/>
                    <input type="radio" name="mood" value="1" id="happy" />
                </div>
                    <button type="submit">Post</button>
                </form>
            </div>
            </LayoutNav>
        )
    }
}

module.exports = User;