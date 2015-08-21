import sectionRouter from "./router";

$(document).ready(() => {
	$('.menu').click((ev) => {
		$('#nav').toggleClass('active');
	});
});