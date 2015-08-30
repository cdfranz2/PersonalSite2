import About from "./script/about";
import Projects from "./script/projects";
import Contact from "./script/contact";

var SectionRouter = Backbone.Router.extend({
	routes: {
		'about': 'about',
		'projects': 'projects',
		'resume': 'resume',
		'contact': 'contact',
		'*path': 'about'
	},

	about: function() {
		this.setPageContent(About, '.about');
	},

	projects: function() {
		this.setPageContent(Projects, '.projects');
	},

	resume: function() {
		window.location.replace('assets/resume-chadfranzen.pdf');
	},

	contact: function() {
		this.setPageContent(Contact, '.contact');
	},

	setPageContent: function(Component, navSelector) {
		var container = _.first($('.content')),
			navItems = $('.nav-item');
		//insert main content
		React.unmountComponentAtNode(container);
		React.render(<Component />, container);

		//update navbar
		navItems.removeClass('selected');
		navItems.filter(navSelector).addClass('selected');
	}
});

var router = new SectionRouter();

Backbone.history.start();

export default router;