$(function(){
  debugger;
  var welcome = new APP.Partial('welcome.html', 'welcome');
  welcome.render();

  var nav = new APP.Nav;
  nav.html();
});
