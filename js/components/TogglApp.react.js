var React = require('react');

var EntryForm = require('./EntryForm.react');

var TogglApp = React.createClass({

  getInitialState: function() {
    return {};
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <EntryForm />
      </div>
    );
  }
});

module.exports = TogglApp;
