var React = require('react');
var Nav = require('./Nav');


var Header = React.createClass({

  render: function() {
    var data = this.props.rfsData.dataObj.header;

    return (
      <header>
        <Nav />
      </header>
    )
  }

});

module.exports = Header;