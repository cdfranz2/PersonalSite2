import router from "./router";

$(document).ready(() => {
	$('.menu').click((ev) => {
		$('#nav').toggleClass('active');
	});

	$('.about').click(() => {
		router.navigate('about', {trigger: true});
	});

	$('.projects').click(() => {
		router.navigate('projects', {trigger: true});
	});

	$('.resume').click(() => {
		router.navigate('resume', {trigger: true});
	});

	$('.contact').click(() => {
		router.navigate('contact', {trigger: true});
	});

	$('.nav-item').click((ev) => {
		$('.nav-item').removeClass('selected');
		$(ev.target).closest('.nav-item').addClass('selected');
	});
});