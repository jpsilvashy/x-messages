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

// For each message, alert the user using alertify
var handle_messages = function(messages) {
  $.each(messages, function(type, message) {

    // These can be handled however you like alertify is
    // quick and easy: https://github.com/fabien-d/alertify.js/
    alertify.log(message, type);

    // Other examples:
    // console.log(type, message);
    // alert(type + ': ' +  message);
    // $('#messages').append("<span class='" + type + "'>" + message + "</span>");

  });
}

// Get messages from response header
$(document).ajaxComplete(function(event, response) {
  handle_messages(get_x_messages(response))
});

// When the page is ready hide the messages we are rendering
// in the body, this allows clients without JS to view the
// messages in the body, while clients with JS can handle the
// messages with something like Alertify.js
$(function() {

  // hide these since we have alertify to show our messages
  $('.x-messages').hide();

  if ((typeof x_messages !== "undefined") && (x_messages !== null)) {
    handle_messages(x_messages);
  }

})
