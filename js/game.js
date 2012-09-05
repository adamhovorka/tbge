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

			}

		};

		// Method calling logic
		if ( gamemethods[method] ) {
			return gamemethods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return gamemethods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.game' );
		}
	};

})( jQuery );
