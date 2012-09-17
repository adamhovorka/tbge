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
 *  This file implements  raw interaction functions  --  drawing a map,  drawing
 *  sprites, drawing dialogs, etc.
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

				// Initialize a blank map and sprites array
				this.data("map", {});
				this.data("sprites", []);

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

				if (data != null)
				{

					// Load the settings from storage.
					var settings = this.data("settings");

					// Store the map data.
					this.data("map", data);
					var map = data.data;

					// Iterate over the map and update sprites.
					for (y=0; y<settings.height; y++)
					{
						for (x=0; x<settings.width; x++)
						{
							this.children("#" + y).children("#" + x).css("background-position", "0px -" + (settings.resolution * map[y + data.y][x + data.x]) + "px");
						}
					}

				} else {

					return this.data("map");

				}
			},

			// Pan method - Moves the map around.
			pan: function(camerax, cameray) {

				// Load the settings and map from storage.
				var settings = this.data("settings");
				var data = this.data("map");
				var map = data.data;

				// Iterate over the map and update sprites.
				for (y=0; y<settings.height; y++)
				{
					for (x=0; x<settings.width; x++)
					{
						this.children("#" + y).children("#" + x).css("background-position", "0px -" + (settings.resolution * map[y + cameray][x + camerax]) + "px");
					}
				}

			},

			// Sprite method - Controls sprites.
			sprite: function(method) {

				// Sprite method object
				var spritemethods = {

					// Create method - Makes a new sprite
					create: function(options){

						// Load settings and sprites from data
						var settings = this.data("settings");
						var sprites = this.data("sprites");

						// Create the sprite div
						var id = "sprite" + sprites.length;
						this.append("<div class='game-sprite' id='" + id + "'></div>");
						$("#" + id).css({
							"top": this.offset().top + (settings.resolution * options.y) + "px",
							"left": this.offset().left + ((this.width() - (settings.resolution * settings.width)) / 2) + (settings.resolution * options.x) + "px",
							"height": settings.resolution + "px",
							"width": settings.resolution + "px"
						});

						// Set the background
						$("#" + id).css("background-image", "url(" + options.sprites + ")");
						$("#" + id).css("background-position", "0 -" + (settings.resolution * options.image) + "px");

						// Add sprite information onto "sprites"
						sprites.push(options);
						this.data("sprites", sprites);

						// Return the id
						return id;
					},

					// Image method - Change which sprite is shown
					// Used to make players face another direction, etc.
					image: function(id, image){

						// Load settings and sprites from data
						var settings = this.data("settings");
						var sprites = this.data("sprites");

						// Update the sprite
						$("#sprite" + id).css("background-position", "0 -" + (settings.resolution * image) + "px")

						// Update the image in memory
						sprites[id].image = image;
						this.data("sprites", sprites);
					},

					// Move method - Move the sprite around
					// NOTE! Coordinates are relative to SCREEN NOT MAP
					move: function(id, spritex, spritey){

						// Load settings and sprites from data
						var settings = this.data("settings");
						var sprites = this.data("sprites");

						// Update the sprite
						$("#sprite" + id).css({
							top: this.offset().top + (settings.resolution * spritey) + "px",
							left: this.offset().left + ((this.width() - (settings.resolution * settings.width)) / 2) + (settings.resolution * spritex) + "px"
						});

						// Update the sprite in memory
						sprites[id].x = spritex;
						sprites[id].y = spritey;
						this.data("sprites", sprites);
					},

					// Redraw method - move the sprites back to the right
					// position after window resize
					// NOTE! Don't use this for anything BUT window resize
					redraw: function(){

						// Load settings and sprites from data
						var settings = this.data("settings");
						var sprites = this.data("sprites");

						// Iterate over the sprites list
						for (id in sprites) {

							// Update the sprite
							$("#sprite" + id).css({
								left: this.offset().left + ((this.width() - (settings.resolution * settings.width)) / 2) + (settings.resolution * sprites[id].x) + "px"
							});
						}
					}
				};

				// Method calling logic ==--
				if ( spritemethods[method] ) {
					return spritemethods[ method ].apply( this,
						Array.prototype.slice.call( arguments, 1 ));
				} else if ( typeof method === 'object' || ! method ) {
					return spritemethods.create.apply( this, arguments );
				} else {
					$.error( 'Method ' +  method +
						' does not exist on jQuery.game.sprite' );
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
