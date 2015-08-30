var About = React.createClass({
	render: function(){
		return (
			<div>
				<img src="assets/photo.jpg" style={{display: 'block', width: '40%', maxWidth: '200px', borderRadius: '100%', margin: 'auto', marginBottom: '2em'}}/>
				<div className="underline" />
				<p>Hi, my name is Chad Franzen. I am currently a Computer Science major at the University of Illinois at Urbana-Champaign but I'm originally from Algonquin, IL.</p>
				<p>At UIUC, I'm a James Scholar and a member of the Campus Honors Program. In high school, I competed in Worldwide Youth in Science and Engineering and won medals at the state finals. In elementary school I once earned a gold star on my multiplication test.</p>
				<p>I've previously interned as a front-end web engineer at Sprout Social, where I spearheaded the JavaScript development of a new feature projected to generate millions in revenue. I've also worked in the logistics department of an energy management company, and I have lots of volunteer experience in tutoring and other areas.</p>
				<p>My hobbies include reading, video games, listening to standup comedy, and bugging people about <i>A Song of Ice and Fire</i>.</p>
			</div>
		);
	}
})

export default About;