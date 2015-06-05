var React = require('react');


var AboutPage = React.createClass({
  render: function() {
    var data = this.props.rfsData.dataObj.aboutPage;

    return (
      <div className="about_page page_component">
        <h2 className="page_title">{data.title}</h2>
        <p className="main_copy">{data.mainCopy}</p>
      </div>
    )
  }
});

module.exports = AboutPage;