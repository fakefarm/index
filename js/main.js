var APP = APP || {};

APP.Nav = (function() {
  function Nav() {}

  Nav.prototype = {
    html: html,
    // todo - Paint
  }

  function html(){
    $.ajax({
      url: "nav.html",
    }).done(function(html) {
      insertHtml(html);
    });
  }

  function insertHtml(html) {
    var $h = $(html);
    $h.removeClass('hidden').addClass('color')
    $('nav').html($h);
  }

  return Nav
}());

$(function(){
  var n = new APP.Nav;
  n.html();
});
