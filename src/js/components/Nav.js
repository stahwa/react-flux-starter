var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Nav = React.createClass({
  
  render: function() {

    return (
      <nav>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </nav>
    )
  }

});

module.exports = Nav;