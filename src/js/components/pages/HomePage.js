var React = require('react');
var RFStarterActions = require('../../actions/RFStarterActions');


var HomePage = React.createClass({

  render: function() {
    var data = this.props.rfsData.dataObj.homePage;
    var _this = this;

    return (
      <div className="home_page page_component">
        <h2 className="page_title">{data.title}</h2>
        <p className="main_copy">{data.mainCopy}</p>
        <ul>
          {
            data.technologies.map(function(tech, i) {
              return <li key={i}><a href={tech.url} onMouseEnter={_this._onTechMouseEnter} onMouseLeave={_this._onTechMouseLeave} target="_blank">{tech.name}</a></li>
            })
          }
        </ul>
      </div>
    )
  },

  _onTechMouseEnter: function(e) {
    RFStarterActions.toggleHover(e.currentTarget.textContent);
  },

  _onTechMouseLeave: function(e) {
    RFStarterActions.toggleHover('');
  }

});

module.exports = HomePage;