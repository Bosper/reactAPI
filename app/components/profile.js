var React           = require('react');
var Repos           = require('./github/repos');
var UserProfile     = require('./github/userprofile');
var Notes           = require('./notes/notes');
var ReactFireMixin  = require('reactfire');
var Firebase        = require('firebase');

var Profile = React.createClass({

    mixins: [ ReactFireMixin ],

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

    componentWillMount: function(){
        this.ref =  new Firebase('https://glowing-heat-8204.firebaseio.com/');
        var childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, 'notes');
    },

    componentWillUnmount: function(){
        this.unbind('notes');
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
                    <Notes username={this.props.params.username} notes={this.state.notes} />
                </div>
            </div>
        )
    }
});

module.exports = Profile;