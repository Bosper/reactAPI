var React = require('react');

var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },

    setRef: function (ref) {
        this.note = ref;
    },

    handleSubmit: function () {
        var newNote = this.note.value;
        console.log(newNote);
        this.note.value = '';
        this.props.addNote(newNote);
    },

    render: function(){
        return(
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add new note" ref={this.setRef} />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                </span>
            </div>
        )
    }
});

module.exports = AddNote;