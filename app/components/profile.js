var React = require('react');
var Repos = require('./github/repos');
var UserProfile = require('./github/userprofile');
var Notes = require('./notes/notes');

var Profile = React.createClass({

    getInitialState: function () {
        return {
            notes: [
                'Note one ',
                'Note two ',
                'Note three'
            ],
            bio: {
                name: 'Uland Nimblehoof'
            },
            repos: [
                'reactAPI ',
                'KNP'
            ]
        }
    },

    render: function(){
        console.log(this.props);
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes notes={this.state.notes} />
                </div>
            </div>
        )
    }
});

module.exports = Profile;