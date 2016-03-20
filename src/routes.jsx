var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;  //figures out what to show
var Route = ReactRouter.Route;  //shows router how to construct itself

var Main = require('./components/main');

module.exports = (
  <Router>
    <Route path= "/" component={Main}>
    </Route>
  </Router>
);
