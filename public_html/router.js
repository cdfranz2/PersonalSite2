var React = require('react');

import About from "./script/about";
import Projects from "./script/projects";
import Contact from "./script/contact";

var SectionRouter = Backbone.Router.extend({
	routes: {
		"/about": "about"
	},

	about: function() {
		this.setPageContent(About);
	},

	projects: function() {
		this.setPageContent(Projects);
	},

	resume: function() {

	},

	contact: function() {
		this.setPageContent(Contact);
	},

	setPageContent: function(Component) {
		var container = _.first($('.content'));
		React.unmountComponentAtNode(container);
		React.render(<Component />, container);
	}
});

var router = new SectionRouter();

export default router;