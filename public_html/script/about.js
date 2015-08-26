var React = require('react');

var About = React.createClass({
	render: function(){
		return (
			<div>
				<img src="photo.jpg" style={{display: 'block', width: '40%', maxWidth: '200px', borderRadius: '100%', margin: 'auto', marginBottom: '2em'}}/>
				<div className="underline" />
				<p>Hi, my name is Chad Franzen. I am currently a Computer Science major at the University of Illinois at Urbana-Champaign but I'm originally from Algonquin, IL.</p>
				<p>In high school, I competed in Worldwide Youth in Science and Engineering and won medals at the state finals. On campus, I'm a part of the Association for Computing Machinery and the Campus Honors Program. In elementary school I once earned a gold star on my multiplication test.</p>
				<p>I've had experience working in the logistics department of an energy management company, as well as lots of volunteer experience in tutoring and other areas.</p>
				<p>My hobbies include video games, reading, listening to standup comedy, and bugging people about A Song of Ice and Fire.</p>
			</div>
		);
	}
})

export default About;