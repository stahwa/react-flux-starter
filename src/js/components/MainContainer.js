var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var MainContainer = React.createClass({
  
  render: function() {

    return (
      <div className="main_section">
        <RouteHandler rfsData={this.props.rfsData}/>
      </div>
    )
  }

});

module.exports = MainContainer;
