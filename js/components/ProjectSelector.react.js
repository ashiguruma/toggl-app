var React = require('react');

var ProjectSelector = React.createClass({
  getInitialState: function() {
    return {
      projects: []
    };
  },

  componentDidMount: function() {

  },

  render: function() {
    var projectEntry = function(project) {
      return <option key={project.id} value={project.id}>{project.name}</option>
    };

    return <div id="task-project-container" className="container">
      <label htmlFor="task-project" className="visuallyhidden focusable">Project</label>
      <select id="task-project" name="taskProject">
        <option>Select a project&hellip;</option>
        {this.state.projects.map(projectEntry)}
      </select>
    </div>

  }
});

module.exports = ProjectSelector
