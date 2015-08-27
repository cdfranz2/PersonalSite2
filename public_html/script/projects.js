var React = require('react');

var projectData = [
	{
		name: "Bloodborne Skill Calculator",
		description: "This is a web app to help others plan their characters in the role-playing game Bloodborne. Users can enter their current and planned attributes through Backbone views, which flows into a Backbone model that calculates resulting character statistics and bubbles them back up to the view.",
		link: 'bloodbornecalculator/bloodborne.html'
	},
	{
		name: "Super Puzzle Ninja",
		description: "This is a Flash game that I made with the help of the Flixel library in May 2014. It's an action-puzzle game that implements a complex gameplay loop, sprite-based graphics, particle effects, saved high scores, and more while also accounting for performance.",
		link: 'http://web.engr.illinois.edu/~cdfranz2/superpuzzleninja/SuperPuzzleNinja.html',
		github: 'https://github.com/cdfranz2/SuperPuzzleNinja'
	},
	{
		name: "ASoIaF Character Generator",
		description: "This is a simple web tool that creates characters fit to live in the world of Westeros. Users can select gender, region, and house options, and then generate characters based on their specifications. I used JavaScript to handle character generation and jQuery to implement the UI, which involves a collapsible, dynamic bottom drawer.",
		link: 'asoiafgenerator/main.html',
		github: null
	},
	{
		name: "Can One Fake Randomness?",
		description: "This is a poster project, entered into the 2014 UIUC Undergraduate Research Symposium, that I worked on with my classmates Rishbabh Marya and Robert Weber, along with Professor A.J. Hildebrand. The project involved developing statistical tests in Java and JavaScript, along with heavy use of the JExcel API for analyzing our experimental data. The poster won an Outstanding Presentation Award from Akuna Capital LLC.",
		link: 'assets/ursposter.pdf',
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
	getDefaultProps: function() {
		return {
			// Header
			name: '',

			// Body
			description: '',

			// URL for the project itself (if available)
			link: '',

			// URL for the project's Github repo (if available)
			github: '',
		}
	},

	getLinks: function() {
		var links = [];
		if (this.props.github) {
			links.push(
				<a href={this.props.github} title="Github" key="Github">
					{/* Github SVG */}
					<svg viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" version="1.1" space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M0 499.968q0 -207.018 146.475 -353.493t353.493 -146.475 353.493 146.475 146.475 353.493 -146.475 353.493 -353.493 146.475 -353.493 -146.475 -146.475 -353.493zm54.684 0q0 183.582 130.851 314.433t314.433 130.851 314.433 -130.851 130.851 -314.433 -130.851 -314.433 -314.433 -130.851 -314.433 130.851 -130.851 314.433zm140.616 107.415q-3.906 -3.906 0 -7.812 7.812 -7.812 19.53 -5.859t13.671 3.906q13.671 5.859 30.271 26.366t26.366 28.319q46.872 39.06 95.697 5.859 3.906 -13.671 12.694 -23.436t16.601 -13.671 27.342 -11.718q-64.449 -5.859 -104.486 -22.46t-63.473 -41.989q-31.248 -35.154 -38.084 -91.791t8.789 -103.509q11.718 -29.295 33.201 -52.731 -15.624 -48.825 5.859 -111.321 62.496 3.906 113.274 42.966 97.65 -25.389 203.112 -1.953 13.671 -9.765 41.989 -24.413t71.285 -16.601q7.812 21.483 10.742 50.778t-2.929 54.684q44.919 46.872 46.872 124.992 0 62.496 -21.483 103.509t-76.167 68.355q-37.107 17.577 -97.65 21.483 27.342 13.671 40.037 28.319t16.601 45.895l0 61.52t1.953 59.567q5.859 9.765 13.671 16.601t13.671 9.765 3.906 8.789 -15.624 5.859q-33.201 0 -52.731 -23.436 -5.859 -9.765 -5.859 -23.436l0 -93.744q0 -15.624 -7.812 -22.46t-15.624 -8.789l0 123.039q0 33.201 7.812 42.966t9.765 19.53q1.953 1.953 -2.929 2.929t-16.601 -2.929q-25.389 -5.859 -35.154 -26.366t-9.765 -43.943l0 -121.086l-25.389 0l0 121.086q0 23.436 -9.765 44.919 -13.671 27.342 -50.778 29.295 -5.859 -1.953 -5.859 -3.906 1.953 -1.953 11.718 -19.53 1.953 -3.906 4.883 -15.624t2.929 -27.342l0 -123.039q-7.812 1.953 -14.648 8.789t-6.836 22.46l0 93.744q0 13.671 -5.859 23.436 -17.577 23.436 -52.731 23.436 -13.671 0 -15.624 -5.859 -1.953 -3.906 .977 -6.836t8.789 -6.836 7.812 -5.859q7.812 -5.859 11.718 -15.624 5.859 -7.812 2.929 -41.013t-.977 -42.966q-50.778 17.577 -103.509 -17.577 -15.624 -15.624 -31.248 -44.919 -11.718 -21.483 -46.872 -50.778z"/></svg>
				</a>
			);
		}
		if (this.props.link) {
			links.push(
				<a href={this.props.link} title="Learn More" key="Link">
					{/* Arrow SVG */}
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" space="preserve">
					<path d="M512,256C512,114.595,397.404,0,256,0C114.624,0,0,114.596,0,256c0,141.375,114.624,256,256,256
						C397.405,512,512,397.376,512,256z M193.062,376.032c-13.283-11.658-14.596-31.907-2.905-45.158l65.811-74.967l-66.313-74.595
						c-11.75-13.188-10.56-33.438,2.627-45.188c13.248-11.783,33.498-10.593,45.248,2.624l85.127,95.718
						c0.998,1.095,1.312,2.471,2.125,3.626c1.279,1.907,2.531,3.718,3.376,5.782c0.685,1.812,1.03,3.594,1.437,5.438
						c0.438,2.188,0.874,4.281,0.842,6.498c0,1.876-0.375,3.69-0.717,5.565c-0.375,2.125-0.752,4.218-1.594,6.281
						c-0.752,1.876-1.907,3.469-3.002,5.217c-0.841,1.314-1.248,2.812-2.31,4l-84.532,96.252
						C226.592,386.406,206.374,387.719,193.062,376.032z"/>
					</svg>
				</a>
			);
		}

		return links;
	},

	render: function() {
		return (
			<li className="project">
				<div className="section-header">{this.props.name}</div>
				<div className="underline" />
				<div>{this.props.description}</div>
				<div style={{float: 'right', marginTop: '1em'}}>
					{this.getLinks()}
				</div>
			</li>
		);
	}
});

var Projects = React.createClass({
	getProjects: function() {
		return projectData.map(function(project) {
			return (<Project name={project.name} description={project.description} link={project.link} github={project.github} key={project.name}/>);
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