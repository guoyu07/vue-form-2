'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h) {
  var _this = this;

  if (!this.hasMessage) return '';

  var message = '<p>' + this.Message + '</p>';
  var errors = [];

  this.showableErrors.map(function (error) {
    return errors.push(_this.getErrorMessage(error));
  });
  errors = errors.map(function (error) {
    return '<li>' + error + '</li>';
  });
  var content = this.hasErrors ? '<p>' + this.errorsCount + '</p><ul>' + errors.join('') + '</ul>' : message;

  return h(
    'div',
    { 'class': 'StatusBar alert alert-' + this.Status, domProps: {
        'innerHTML': content
      }
    },
    []
  );
};