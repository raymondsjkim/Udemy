"use strict";


$(document).ready(function() {
	// Check off specific todos by clicking
	$("ul").on("click", "li", function() {
		$(this).toggleClass("completed");
	});

	// click on X to delete todo
	$("ul").on("click", "span", function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
		event.stopPropagation();
	});

	$("input[type='text']").keypress(function(event) {
		if(event.which === 13) {
			// grab new todo text from input
			var todoTxt = $(this).val();
			$(this).val('');
			// create a new li and add to ul
			$("ul").append("<li><span><i class='fa fa-trash-o'></i></span>" + todoTxt + "</li>");
		}
	});

	$(".fa-plus-circle").click(function() {
		$("input[type='text']").fadeToggle();
	});
});