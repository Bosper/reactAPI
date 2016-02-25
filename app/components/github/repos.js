var React = require('react');

var Repos = React.createClass({
    render: function () {
        return(

            <div>
                <p>Repositories!</p>
                <p>{this.props.repos}</p>
            </div>
        )
    }
});

module.exports = Repos;