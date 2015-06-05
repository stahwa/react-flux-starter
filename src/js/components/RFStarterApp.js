var React = require('react');
var Router = require('react-router');
var Header = require('./Header');
var MainContainer = require('./MainContainer');
var Footer = require('./Footer');
var RFStarterStore = require('../stores/RFStarterStore');


function getRfsData() {
  return {
    rfsData: RFStarterStore.getData()
  };
}

function getTechName() {
  return {
    name: RFStarterStore.getName()
  };
}


var RFStarterApp = React.createClass({

  getDefaultProps: function() {
    return getRfsData();
  },

  getInitialState: function() {
    return {
     name: ''
    };
  },

  componentDidMount: function() {
    RFStarterStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    RFStarterStore.removeChangeListener(this._onChange);
  },

  render: function(){

    return (
      <div className="site_wrap">
        <div className="main_wrap">
          <Header rfsData={this.props.rfsData} />
          <MainContainer rfsData={this.props.rfsData} />
        </div>
        <Footer rfsData={this.props.rfsData} name={this.state.name} />
      </div>
    )
  },

  _onChange: function() {
    this.setState(getTechName());
  }

});

module.exports = RFStarterApp;
