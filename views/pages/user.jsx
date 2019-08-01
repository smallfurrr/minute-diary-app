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
                        <label>
                            <p>Happy</p>
                            <input type="radio" name="mood_id" value="1" checked/>
                            <img src="img/happy.png"/>
                        </label>
                    </div>

                    <div className="radio-wrapper">
                        <label>
                            <p>Angry</p>
                            <input type="radio" name="mood_id" value="2"/>
                            <img src="img/angry.png"/>
                        </label>
                    </div>

                    <div className="radio-wrapper">
                        <label>
                            <p>Sad</p>
                            <input type="radio" name="mood_id" value="3"/>
                            <img src="img/sad.png"/>
                        </label>
                    </div>

                    <div className="radio-wrapper">
                        <label>
                            <p>Meh</p>
                            <input type="radio" name="mood_id" value="4"/>
                            <img src="img/meh.png"/>
                        </label>
                    </div>

                    <div className="radio-wrapper">
                        <label>
                            <p>Worried</p>
                            <input type="radio" name="mood_id" value="5"/>
                            <img src="img/worried.png"/>
                        </label>
                    </div>
                    <button type="submit">Post</button>
                </div>
                </form>
            </div>
            </LayoutNav>
        )
    }
}

module.exports = User;