
var AppDispatcher = require('../dispatcher/AppDispatcher');

var RFStarterActions = {

  toggleHover: function(name) {
    AppDispatcher.dispatch({
      actionType: 'toggleHover',
      name: name
    });
  }

};

module.exports = RFStarterActions;