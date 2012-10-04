/*
 *  js/editor-tile.js
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
 *  This file contains the code for the tile editor in editor.html.
 *
 */

$(function() {

	// "New Tile Set" dialog ====----
	$("body").append("<div class='dialog' id='tiles-new'></div>");
	$("#tiles-new.dialog").append("<div id='content'></div>");
	$("#tiles-new.dialog > #content").append("<h1>New Tile Set</h1><hr class='separator' />");

	$("#tiles-new.dialog > #content").append("<h2>Resolution</h2>");
	$("#tiles-new.dialog > #content").append("<div class='top radio on' id='8'>8x8</div>");
	$("#tiles-new.dialog > #content").append("<div class='radio' id='16'>16x16</div>");
	$("#tiles-new.dialog > #content").append("<div class='bottom radio' id='32'>32x32</div>");

	$("#tiles-new.dialog > #content").append("<h2>No. of Tiles</h2>");
	$("#tiles-new.dialog > #content").append("<div class='right horiz button' id='add' style='width: 30%'>+</div>");
	$("#tiles-new.dialog > #content").append("<div class='horiz readout button' id='tilenum' style='width: 40%'>1</div>");
	$("#tiles-new.dialog > #content").append("<div class='left horiz button' id='sub' style='width: 30%'>-</div>");

	$("#tiles-new.dialog > #content").append("<hr class='separator' />");
	$("#tiles-new.dialog > #content").append("<div class='pill button' id='go'>Go</div>");
	$("#tiles-new.dialog").hide();


        // "New" dialog buttons ===---
	$("#tiles-new.dialog > #content > .radio").click(function(){
		if (!($(this).hasClass("on"))){
		// There's some style-related stuff on the next two lines.
		$(this).parent().children(".radio").removeClass("on").css("background-color", "#222");
		$(this).addClass("on").css("background-color", "#335")}});

	$("#tiles-new.dialog > #content > #tilenum.button").data("value", 1);
	// TODO Make a text input ==--
	//$("#tiles-new.dialog > #content > #tilenum.button").click(function(){
	//	$("#tiles-new.dialog > #content").append("<input type='text' class='text' id='value'/>");});
	$("#tiles-new.dialog > #content > #add.button").click(function(){
		var val = $("#tiles-new.dialog > #content > #tilenum.button");
		var value = val.data("value") + 1;
		if (value != 1025) {val.data("value", value).html(value)}});
	$("#tiles-new.dialog > #content > #sub.button").click(function(){
		var val = $("#tiles-new.dialog > #content > #tilenum.button");
		var value = val.data("value") - 1;
		if (value != 0) {val.data("value", value).html(value)}});

	$("#tiles-new.dialog > #content > #go.button").click(function(){$("#tiles-new.dialog").hide(); $("#modal").hide();});


	// "Show" function ====----
	$("#tiles-new.dialog").data("open", function(){
		$("#tiles-new.dialog").show();
		$("#tiles-new.dialog").css({top: (($(window).height() - $("#tiles-new.dialog").height()) / 2)
			+ "px", left: (($(window).width() - $("#tiles-new.dialog").width()) / 2) + "px"});
		$("#tiles-new.dialog > #content > #tilenum.button").data("value", 1).html("1");
	});
});
