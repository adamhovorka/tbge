/*
 *  js/game.js
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
 *  This file is the  jQuery plugin that implements various game features;  tile
 *  rendering, interactive dialog creation functions, etc. all go in here.
 *
 *  This is *NOT* the place to put  anything story-related.  If you're writing a
 *  story module, it goes in a separate file - story.js or the like.
 *
 */

// Begin jQuery plugins ====----
( function($) {

	// Game function - Most things will go in here.
	$.fn.game = function(method) {

		var gamemethods = {

			// Initialization method - Initializes a game surface.
			init: function(options) {

				// Create the settings object by combining the
				// defaults and the options argument.
				var settings = $.extend({
					height: 8,
					width: 12,
					resolution: 16,
					sprites: ""
				}, options);
				this.data("settings", settings);

				// Create the game surface.
				for (i=0; i<settings.height; i++)
				{
					// Create a new row.
					this.append("<div id='" + i + "' class='row'></div><br />");

					// Populate the row with icons.
					for (j=0; j<settings.width; j++)
					{
						this.children("#" + i).append("<div id='" + j + "' class='icon'></div>");
					}

					// Set the css for the icons.
					this.children("#" + i).children(".icon").css({
						"height": settings.resolution + "px",
						"width": settings.resolution + "px",
						"background-image": "url(" + settings.sprites + ")",
						"float": "left"
					});
				}

				// Set the line height so that there isn't any space between the rows.
				this.css("line-height", settings.resolution + "px");
			},

			// Map method - Loads a new map into the game surface.
			map: function(data) {

				// Load the settings from storage.
				var settings = this.data("settings");

				// Store the map data.
				this.data("map", data);
				var map = data.data;

				for (y=0; y<settings.height; y++)
				{
					for (x=0; x<settings.width; x++)
					{
						this.children("#" + y).children("#" + x).css("background-position", "0px -" + (settings.resolution * map[y][x]) + "px");
					}
				}
			}

		};

		// Method calling logic ====----
		if ( gamemethods[method] ) {
			return gamemethods[ method ].apply( this,
				Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return gamemethods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method +
				' does not exist on jQuery.game' );
		}
	};

})( jQuery );
