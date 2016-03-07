var React           = require('react');
var Repos           = require('./github/repos');
var UserProfile     = require('./github/userprofile');
var Notes           = require('./notes/notes');
var ReactFireMixin  = require('reactfire');
var Firebase        = require('firebase');
var Helpers         = require('../utils/helpers.js');

var Profile = React.createClass({

    mixins: [ ReactFireMixin ],

    getInitialState: function () {
        return {
            notes: [],
            bio: {},
            repos: []
        }
    },

    componentDidMount: function(){
        this.ref =  new Firebase('https://glowing-heat-8204.firebaseio.com/');
        var childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, 'notes');

        Helpers.gitHubInfo(this.props.params.username)
            .then(function(data){
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
        }.bind(this))
    },

    componentWillUnmount: function(){
        this.unbind('notes');
    },

    handleAddNote: function(newNote) {
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
    },

    render: function(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes
                        username={this.props.params.username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote} />
                </div>
            </div>
        )
    }
});

module.exports = Profile;