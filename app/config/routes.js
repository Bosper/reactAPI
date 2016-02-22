var React       = require('react');
var Router      = require('react-router');
var Main        = require('../components/main');
var Home        = require('../components/home');
var Route       = Router.Route;
var IndexRoute  = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>


        <IndexRoute component={Home} />
    </Route>
)