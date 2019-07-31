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
                    <textarea name="content" rows="10" cols="30" maxlength="500" placeholder="Let it out.."></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
            </LayoutNav>
        )
    }
}

module.exports = User;