var APP = APP || {};

APP.Partial = (function() {
  function Partial(file, id) {
    this.file = file;
    this.id = '#' + id;
  }

  Partial.prototype = {
    render: render,
  }

  function render() {
    $.ajax({
      url: this.file,
    }).done(function(html) {
      insertHtml(html, this);
    }.bind(this));
  }

  function insertHtml(html, self) {
    var $h = $(html);
    $(self.id).html($h);
  }

  return Partial
}());
