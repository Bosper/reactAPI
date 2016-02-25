var React       = require('react');
var Router      = require('react-router');
var Main        = require('../components/main');
var Home        = require('../components/home');
var Profile     = require('../components/profile');
var Route       = Router.Route;
var IndexRoute  = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component={Profile} />
        <IndexRoute component={Home} />
    </Route>
)