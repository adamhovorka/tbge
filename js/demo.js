/*
 *  js/demo.js
 *
 *  Part of the Tile Based Game Engine project
 *
 *
 *  Copyright (C) 2012 Exclamation Studios
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and  associated  documentation files ( the "Software"),  to
 *  deal in the Software without  restriction,  including without limitation the
 *  rights to use, copy,  modify, merge, publish, distribute, sublicense, and/or
 *  sell copies of the Software,  and to permit  persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright  notice and this  permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS",  WITHOUT WARRANTY OF ANY KIND,  EXPRESS OR
 *  IMPLIED,  INCLUDING  BUT NOT LIMITED TO THE  WARRANTIES OF  MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 *  AUTHORS OR  COPYRIGHT  HOLDERS  BE LIABLE  FOR ANY CLAIM,  DAMAGES  OR OTHER
 *  LIABILITY,  WHETHER IN  AN ACTION  OF CONTRACT,  TORT OR OTHERWISE,  ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 *  IN THE SOFTWARE.
 *
 *
 *  This file contains the code for the demo page.
 *
 */

$(function() {
	// Initialize the game surface ====----
	$("#game").game({
		height: 8,
		width: 12,
		resolution: 32,
		sprites: "images/demo-sprites.png"
	});

	var map = [
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[3, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 4],
		[3, 0, 3,11,12,13, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4],
		[3, 0, 3, 8, 9,10, 0,14,14, 4, 0, 0, 0, 0, 0, 4],
		[3, 0, 3, 5, 6, 7, 0,14,14, 4, 0, 0, 0, 0, 0, 4],
		[3, 0, 3, 0, 0, 0, 0,14,14, 4, 0, 0, 0, 0, 0, 4],
		[3, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4],
		[3, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 4],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0,16,17,17,17,18, 4],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0,22,15,15,15,23, 4],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0,19,20,20,20,21, 4],
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
	]

	// Initialize the map ====----
	$("#game").game("map", {
		height: 16,
		width: 16,
		x: 0, y: 0,
		data: map 
	});

	// Initialize the camera variable ====----
	var camera = {x: 0, y: 3};
	$("body").data("camera", camera);

	// Pan to camera position ====----
	$("#game").game("pan", camera.x, camera.y);

	// Create a player sprite at (4, 8) ====----
	$("#game").game("sprite", "create", {
		x: 4, y: 5, image: 0,
		sprites: "images/demo-player.png"
	});


	// Test onClick event for the "A" button ====----
	$("#abutton").click(function(){ alert("You clicked button A!")});

	// Test onClick event for the "B" button ====----
	$("#abutton").click(function(){ alert("You clicked button B!")});

	// Camera motion onClick event for the D+Pad ====----
	$("#dpad").click(function(event){
		var x = Math.round(event.pageX - $(this).offset().left);
		var y = Math.round(event.pageY - $(this).offset().top);
		var camera = $("body").data("camera");

		if ((x >= 50) && (x <= 78))
		{
			if ((y >= 10) && (y <= 50))
			{
				// UP ==--
				if (camera.y > 0)
				{
					camera.y--;
					$("#game").game("pan", camera.x, camera.y);
				}

				$("#game").game("sprite", "image", 0, 2);
			} else if ((y >= 78) && (y <= 118)) {
				// DOWN ==--
				if (camera.y < 8)
				{
					camera.y++;
					$("#game").game("pan", camera.x, camera.y);
				}

				$("#game").game("sprite", "image", 0, 0);
			}
		} else if ((y >= 50) && (y <= 78)) {
			if ((x >= 10) && (x <= 50))
			{
				// LEFT ==--
				if (camera.x > 0)
				{
					camera.x--;
					$("#game").game("pan", camera.x, camera.y);
				}

				$("#game").game("sprite", "image", 0, 3);
			} else if ((x >= 78) && (x <= 118)) {
				// RIGHT ==--
				if (camera.x < 4)
				{
					camera.x++;
					$("#game").game("pan", camera.x, camera.y);
				}

				$("#game").game("sprite", "image", 0, 1);
			}
		}

		$("body").data("camera", camera);
	});
});
