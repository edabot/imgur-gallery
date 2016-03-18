var React = require('react');
var Header = require('./Header');

var renderCount = 0;

module.exports = React.createClass({
  render: function () {
    console.log(renderCount++);
    return <div>
    <Header />
    {this.props.childen}
    </div>
  }
});
