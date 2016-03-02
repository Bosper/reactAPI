var React = require('react');
var NotesList = require('./notesList');

var Notes = React.createClass({
    render: function () {

        console.log('Notes: ', this.props.notes);

        return(

            <div>
                <h3>Notes for {this.props.username}</h3>

                <NotesList notes={this.props.notes} />
            </div>
        )
    }
});

module.exports = Notes;