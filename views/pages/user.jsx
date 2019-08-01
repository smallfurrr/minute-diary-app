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
                    <div className="radio-wrapper">
                        <label for="happy"><img src="img/happy.png" alt="happy"/><br/>Happy</label><br/>
                        <input type="radio" name="mood_id" value="1" id="happy" />
                    </div>

                    <div className="radio-wrapper">
                        <label for="angry"><img src="img/angry.png" alt="angry"/><br/>Angry</label><br/>
                        <input type="radio" name="mood_id" value="2" id="angry" />
                    </div>

                    <div className="radio-wrapper">
                        <label for="sad"><img src="img/sad.png" alt="sad"/><br/>Sad</label><br/>
                        <input type="radio" name="mood_id" value="3" id="sad" />
                    </div>

                    <div className="radio-wrapper">
                        <label for="meh"><img src="img/meh.png" alt="meh"/><br/>Meh</label><br/>
                        <input type="radio" name="mood_id" value="4" id="meh" />
                    </div>

                    <div className="radio-wrapper">
                        <label for="worried"><img src="img/worried.png" alt="worried"/><br/>Worried</label><br/>
                        <input type="radio" name="mood_id" value="5" id="worried" />
                    </div>
                </div>
                    <button type="submit">Post</button>
                </form>
            </div>
            </LayoutNav>
        )
    }
}

module.exports = User;