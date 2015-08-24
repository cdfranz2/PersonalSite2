var React = require('react');

var About = React.createClass({
	render: function(){
		return (
			<div>
				<span className="section-header">Projects</span>
				<div className="underline" />
				<div>Hi, my name is Chad Franzen. I am currently a Computer Science major at the University of Illinois at Urbana-Champaign but I'm originally from Algonquin, IL.</div>
				<a>Try It!</a>
				<a>Github</a>
			</div>
		);
	}
})

export default About;