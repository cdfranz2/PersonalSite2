var React = require('react');

var projectData = [
	{
		name: "Super Puzzle Ninja",
		description: "This is a Flash game that I made with the help of the Flixel library in May 2014. It's an action-puzzle game that implements a complex gameplay loop, sprite-based graphics, particle effects, saved high scores, and more while also accounting for performance.",
		link: null,
		github: null
	},
	{
		name: "ASoIaF Character Generator",
		description: "This is a simple web tool that creates characters fit to live in the world of Westeros. Users can select gender, region, and house options, and then generate characters based on their specifications. I used JavaScript to handle character generation and jQuery to implement the UI, which involves a collapsible, dynamic bottom drawer.",
		link: null,
		github: null
	},
	{
		name: "Can One Fake Randomness?",
		description: "This is a poster project, entered into the 2014 UIUC Undergraduate Research Symposium, that I worked on with my classmates Rishbabh Marya and Robert Weber, along with Professor A.J. Hildebrand. The project involved developing statistical tests in Java and JavaScript, along with heavy use of the JExcel API for analyzing our experimental data. The poster won an Outstanding Presentation Award from Akuna Capital LLC.",
		link: null,
		github: null
	},
	{
		name: "EmEssPaint",
		description: "This is a non-copyright-infringing drawing program that I made in my high school Computer Science class. It was written in Java and makes use of the AWT API.",
		link: null,
		github: null
	},
	{
		name: "R. Kelly Saves the World",
		description: "This is a top-down, Robotron-style shooter starring everyone's favorite R&B artist that I wrote in Java during the summer of 2013. I extensively utilized Java's object-oriented capabilities to sensibly develop a wide variety of game entities, including several types of enemies and powerups.",
		link: null,
		github: null
	}
];

var Project = React.createClass({
	clickHandler: function() {

	},

	render: function() {
		return (
			<li className="project">
				<span className="section-header">{this.props.name}</span>
				<div className="underline" />
				<div>{this.props.description}</div>
				<a>Try It!</a>
				<a>Github</a>
			</li>
		);
	}
});

var Projects = React.createClass({
	getProjects: function() {
		return projectData.map(function(project) {
			return (<Project name={project.name} description={project.description} key={project.name}/>);
		});
	},

	render: function() {
		return (
			<ul className="projects">
				{this.getProjects()}
			</ul>
		);
	}
});

export default Projects;