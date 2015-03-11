var React = require('react');

var App = React.createClass({
	render: function() {
		return (
			<div className="testing"> 
				<p> Hello World </p>
			</div>
		)
	}
});

React.render(
	<App />, document.getElementById('app')
	);