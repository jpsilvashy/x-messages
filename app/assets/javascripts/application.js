// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require alertify


// Reads the messages out of the response header, this method
// only applys to headers read from ajax responses. If this
// is a regualar response read the messages out of the var
// rendered in the page
var get_x_messages = function(response) {

  // Get X-Messages header
  var x_messages_header = response.getResponseHeader('X-Messages');

  // if there is an object, parse the JSON
  if ((typeof x_messages_header !== "undefined") && (x_messages_header !== null)) {
    return $.parseJSON(x_messages_header)
  }
}

// For each message, alert the user
var handle_messages = function(messages) {
  $.each(messages, function(type, message) {
    alertify.log(message, type);
  });
}

// Get messages from response header
$(document).ajaxComplete(function(event, response) {
  handle_messages(get_x_messages(response))
});

$(function() {

  // hide these since we have alertify to show our messages
  $('.x-messages').addClass('hidden');

  if ((typeof x_messages !== "undefined") && (x_messages !== null)) {
    handle_messages(x_messages);
  }

})
