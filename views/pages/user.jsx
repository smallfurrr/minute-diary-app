var React = require("react");
var LayoutNav = require('../layouts/layout-nav.jsx');

class User extends React.Component {
    render() {
        return (
            <LayoutNav>
            <div className="user-wrapper">

                <h1>Hello {this.props.name}</h1>
                <h2>How are you feeling today?</h2>

                <textarea name="content" rows="5" cols="30" id="entry-content"maxLength="500" placeholder="Let it out.. Click here and start typing!"></textarea>

                <button type="submit" id="get-modal-btn">Submit</button>

            <div id="overlay">
                <form method="POST" action="/entries" id="entry-form">
                    <input type="hidden" name="user_id" value={this.props.id}/>

                    <h1>One More Thing!</h1>
                    <div id="mood-selection">
                    <h3>Tag Your Mood</h3>
                        <div className="radio-wrapper">
                            <label>
                                <p>Happy</p>
                                <input type="radio" name="mood_id" value="1" defaultChecked/>
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
                    </div> {/* closing mood part of form */}

                    <br/><br/>

                    <div id="reason-selection">
                    <h3>Tag the Main Reason for this Mood</h3>
                        <div className="radio-wrapper">
                            <label>
                                <p>Work</p>
                                <input type="radio" name="reason_id" value="1" defaultChecked/>
                                <img src="img/work.png"/>
                            </label>
                        </div>

                        <div className="radio-wrapper">
                            <label>
                                <p>School</p>
                                <input type="radio" name="reason_id" value="2"/>
                                <img src="img/school.png"/>
                            </label>
                        </div>

                        <div className="radio-wrapper">
                            <label>
                                <p>Family</p>
                                <input type="radio" name="reason_id" value="3"/>
                                <img src="img/family.png"/>
                            </label>
                        </div>

                        <div className="radio-wrapper">
                            <label>
                                <p>Friends</p>
                                <input type="radio" name="reason_id" value="4"/>
                                <img src="img/friendship.png"/>
                            </label>
                        </div>

                         <div className="radio-wrapper">
                            <label>
                                <p>Relationship</p>
                                <input type="radio" name="reason_id" value="5"/>
                                <img src="img/relationship.png"/>
                            </label>
                        </div>

                         <div className="radio-wrapper">
                            <label>
                                <p>Health</p>
                                <input type="radio" name="reason_id" value="6"/>
                                <img src="img/health.png"/>
                            </label>
                        </div>

                         <div className="radio-wrapper">
                            <label>
                                <p>Money</p>
                                <input type="radio" name="reason_id" value="7"/>
                                <img src="img/money.png"/>
                            </label>
                            </div>
                        </div>{/* closing reason part of form */}
                    <br/>
                    <button type="submit">Post</button>
                </form>
            </div>{/* closing overlay div */}
            </div> {/* closing main user wrapper */}

            <script src="scripts/user-script.js"></script>
            </LayoutNav>
        )
    }
}

module.exports = User;