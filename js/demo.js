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
		[3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
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
		data: map 
	});
});
