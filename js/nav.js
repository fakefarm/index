var APP = APP || {};

APP.Nav = (function() {
  function Nav() {}

  Nav.prototype = {
    html: html,
    insert: insertHtml,
  }

  function insertHtml() {
    $('nav').html(getHtml());
  }

  function html() {
    getHtml();
  }

  function getHtml(){
    $.ajax({
      url: "nav.html",
      context: document.body
    }).done(function(html) {
      return html;
    });
  }


  return Nav
}());
