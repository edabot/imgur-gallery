var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <div>
    This is a header
    {this.props.childen}
    </div>
  }
});
