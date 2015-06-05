var React = require('react');


var Footer = React.createClass({

  render: function() {
    var data = this.props.rfsData.dataObj;
    var techs = data.homePage.technologies;
    var tech;
    for (var i = techs.length - 1; i >= 0; i--) {
			if (this.props.name == techs[i].name) {
        tech = techs[i].info
			}
		}

    return (
      <footer>
        <p>{this.props.name}</p>
        <p>{tech}</p>
      </footer>
    )
  }

});

module.exports = Footer;