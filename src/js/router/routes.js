var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var RFStarterApp = require('../components/RFStarterApp');
var HomePage = require('../components/pages/HomePage');
var AboutPage = require('../components/pages/AboutPage');


module.exports = (
  <Route name="home" path="/" handler={RFStarterApp}>
    <Route name="about" handler={AboutPage} />
    <DefaultRoute handler={HomePage}/>
  </Route>
);
