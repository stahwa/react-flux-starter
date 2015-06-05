
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dataObj = require('../../data/data');

var CHANGE_EVENT = 'change';
var _name = '';


function toggleHover(data) {
  _name = data;
}


var RFStarterStore = assign({}, EventEmitter.prototype, {

  getData: function() {
    return dataObj;
  },

  getName: function() {
    return _name;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case 'toggleHover':
      toggleHover(action.name);
      RFStarterStore.emitChange();
      break;

    default:
      // no op
  }

});

module.exports = RFStarterStore;
