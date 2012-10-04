/*
 *  js/rpgf.js
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
 *  This file  implements mid-level  interaction  functions  --  NPC event-based
 *  dialog, interaction with furniture, separate rooms and doors, etc.
 *
 *  This is *NOT* the place to put  anything story-related.  If you're writing a
 *  story module, it goes in a separate file - story.js or the like.
 *
 */

// Begin jQuery plugins ====----
( function($) {

	// Player function - Implements mid-level player controls ====----
	$.fn.player = function(method) {

		// Player method object ====----
		var playermethods = {

			// Init method - Initializes the player object
			init: function(options) {
				alert("Hey, you! You're a player now!");
			}
		};

		// Method calling logic ====----
		if ( playermethods[method] ) {
			return playermethods[ method ].apply( this,
				Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return playermethods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method +
				' does not exist on jQuery.player' );
		}
	};

})( jQuery );
