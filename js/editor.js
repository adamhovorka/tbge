/*
 *  js/editor.js
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
 *  This file contains the code for the editor.
 *
 */

$(function() {

	// Initialize the modal overlay ====----
	$("body").append("<div id='modal'></div>");
	$("#modal").hide();

	// Initialize the menu ====----
	$("body").append("<div class='window' id='menu'></div>");
	$("#menu").append("<div id='content'></div>");//.css("display", "inline-block");
	$("#menu > #content").append("<h1>Tile Based<br />Game Engine<hr />editor.html</h1><hr />");
	$("#menu > #content").append("<div class='top button' id='new'>New</div>");
	$("#menu > #content").append("<div class='button' id='open'>Open</div>");
	$("#menu > #content").append("<div class='bottom button' id='save'>Save</div>");
	$("#menu > #content").append("<hr class='separator' />");
	$("#menu > #content").append("<div class='top button' id='help'>Help</div>");
	$("#menu > #content").append("<div class='bottom button' id='about'>About</div>");

	// "New" button ===---
	$("#menu > #content > #new.button").click(function(){
		$(this).css("background-color", "#222");
		$("#modal").show();
		$("#new.dialog").css({top: parseInt($("#menu").css("top")) + 25 + "px",
			left: (($("#menu").width() - $("#new.dialog").width()) / 4)
			+ parseInt($("#menu").css("left").slice(0, -2)) + "px"});
		$("#new.dialog").show();
	});

	// "Open" button ===---
	$("#menu > #content > #open.button").click(function(){alert("Not implemented")});

	// "Save" button ===---
	$("#menu > #content > #save.button").click(function(){alert("Not implemented")});

	// "Help" button ===---
	$("#menu > #content > #help.button").click(function(){alert("Not implemented")});

	// "About" button ===---
	$("#menu > #content > #about.button").click(function(){alert("Not implemented")});


	// "New" dialog ====----
	$("body").append("<div class='dialog' id='new'></div>");
	$("#new.dialog").append("<div id='content'></div>");
	$("#new.dialog > #content").append("<h1>New File</h1><hr />");
	$("#new.dialog > #content").append("<div class='top button' id='tile'>Tile Set</div>");
	$("#new.dialog > #content").append("<div class='button' id='sprite'>Sprite</div>");
	$("#new.dialog > #content").append("<div class='button' id='map'>Map</div>");
	$("#new.dialog > #content").append("<div class='bottom button' id='cancel'>Cancel</div>");
	$("#new.dialog").hide();

        // "New" dialog buttons ===---
	$("#new.dialog > #content > #tile.button").click(function(){
		$("#new.dialog").hide(); $("#tiles-new.dialog").show();
		$("#tiles-new.dialog").css({top: (($(window).height() - $("#tiles-new.dialog").height()) / 2)
			+ "px", left: (($(window).width() - $("#tiles-new.dialog").width()) / 2) + "px"});});
	$("#new.dialog > #content > #sprite.button").click(function(){alert("Not implemented.");});
	$("#new.dialog > #content > #map.button").click(function(){alert("Not implemented.");});
	$("#new.dialog > #content > #cancel.button").click(function(){$("#new.dialog").hide(); $("#modal").hide();});


	$(".window").draggable({cancel: "#content"});
	$(".dialog").draggable({cancel: "#content"});

	// This is the only style-related stuff in the whole JavaScript file.
	$(".button:not(.readout)").hover(function(){ $(this).css("background-color", "#335");
	}, function(){ $(this).css("background-color", "#222");});
	$(".radio").hover(function(){ $(this).css("background-color", "#335");
	}, function(){ if (!($(this).hasClass("on"))) {$(this).css("background-color", "#222");}});
});
