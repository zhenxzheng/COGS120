'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function($) {
        // Workaround for bug in mouse item selection
        $.fn.typeahead.Constructor.prototype.blur = function() {
            var that = this;
            setTimeout(function () { that.hide() }, 250);
        };
 
        $('#searchbar').typeahead({
            source: function(query, process) {
                return ["Alaska", "Arizona", "Washington"];
            }
        });
    })

/*
 * Function that is called when the document is ready.
 */
/*function initializePage() {
	$('#searchbar').typeahead()
	/*$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Hola!");
		$("testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);*/

}