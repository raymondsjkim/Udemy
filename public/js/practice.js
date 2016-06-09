"use strict";
$(document).ready(function() {
	// Init geocoder object
	var geocoder = new google.maps.Geocoder();
	// Set our map options
	var mapOptions = {
	    // Set the zoom level
	    zoom: 10,

	    // This sets the center of the map at our location
	    center: {
	        lat:  34.0522,
	        lng: -118.2437
	    }
	};

	// Render the map
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	$("#search-location").click(function() {
		var address = $("#location-address").val();
		// Geocode our address
		geocoder.geocode({ "address": address }, function(results, status) {

		   // Check for a successful result
		   if (status == google.maps.GeocoderStatus.OK) {

		       // Recenter the map over the address
		       map.setCenter(results[0].geometry.location);

				var marker = new google.maps.Marker({
					position: results[0].geometry.location,
					animation: google.maps.Animation.DROP,
					map: map
				});
		   

		   } else {
		       // Show an error message with the status if our request fails
		       alert("Geocoding was not successful - STATUS: " + status);
		   }
		});

	});


});