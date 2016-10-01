var APP = APP || {};

APP.Nav = (function() {
  function Nav() {}

  Nav.prototype = {
    html: html,
  }

  function html(){
    $.ajax({
      url: "nav.html",
    }).done(function(html) {
      insertHtml(html);
    });
  }

  function insertHtml(html) {
    $('nav').html(html);
  }

  return Nav
}());

$(function(){
  var n = new APP.Nav;
  n.html();
});
