var React = require('react');

var ProjectSelector = require('./ProjectSelector.react');

var EntryForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var form = event.target;

    var task = {
      name: form.querySelector("#task-name").value,
      project: form.querySelector("#task-project").value
    }
  },

  render: function() {
    return <form id="task-entry" onSubmit={this.handleSubmit}>
      <div id="task-description-container" className="container">
          <label htmlFor="task-description" className="visuallyhidden focusable">Describe your task</label>
          <input type="text" name="taskName" id="task-description" placeholder="e.g. Writing, Bugfixing in IE" />
      </div>

      <ProjectSelector />

      <button type="submit" id="task-start">start</button>
    </form>
  }
});

module.exports = EntryForm;
