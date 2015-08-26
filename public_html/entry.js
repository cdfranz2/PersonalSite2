var React = require('react');

import router from "./router";

$(document).ready(() => {
	$('.menu').click((ev) => {
		$('#nav').toggleClass('active');
	});

	$('.about').click(() => {
		router.about();
	});

	$('.projects').click(() => {
		router.projects();
	});

	$('.contact').click(() => {
		router.contact();
	});

	$('.nav-item').click((ev) => {
		$('.nav-item').removeClass('selected');
		$(ev.target).closest('.nav-item').addClass('selected');
	});

	router.about();
});