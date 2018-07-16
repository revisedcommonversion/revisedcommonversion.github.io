$.noConflict(); // Release the $ to be used for parts of the scripts that don't
				//	use JQuery.
jQuery(document).ready(function($) {
	// This function handles the showing and hiding of the main menu when a user
	//	clicks on the "hamburger" button.
	$("#activate").click(function() {
		$("#menu-items").toggle("fast");
	});
	// If the main menu is shown and the user clicks in the page or banner, the 
	//	main menu is then hidden.
	$("#page, #banner").click(function() {
		$("#menu-items").hide("fast");
	});
	// The following two functions accomplish two things: 1. All chapter text is
	//	hidden. 2. When the user clicks on an individual chapter header, that
	//	chapter text is shown if it's hidden, or hid if it's shown (i.e., 
	//	toggled).
	$(".chapter-text").hide();
	$("header").click(function() {
		$(this).next(".chapter-text").toggle("fast");
	});
	// When the "Hide Text" item is clicked, hide the chapter text.
	$(".hide-text").click(function() {
		$(this).parent("footer").prev(".chapter-text").hide("fast");
	});
});
