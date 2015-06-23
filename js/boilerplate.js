var gui = require('nw.gui');
var appWindow = gui.Window.get();

// Button
var closeBtn  = document.querySelector('#close-btn');
console.log(closeBtn);
closeBtn.addEventListener('click', function(e) {
  console.log('test');
  appWindow.close();
}, false);

var maxBtn  = document.querySelector('#maximize-btn');
maxBtn.addEventListener('click', function(e) {
  appWindow.maximize();
}, false);

var minBtn  = document.querySelector('#minimize-btn');
minBtn.addEventListener('click', function(e) {
  appWindow.minimize();
}, false);

// var buttons = document.querySelector('.buttons');
// var buttonsLabel = document.querySelector('.buttons-label');
// buttons.addEventListener('mouseover', function(e) {
//   buttonsLabel.style.visibility = 'show';
// }, false);
// buttons.addEventListener('mouseout', function(e) {
//   buttonsLabel.style.visibility = 'hidden';
// }, false);

// Menu
var nativeMenuBar = new gui.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("My App");
appWindow.menu = nativeMenuBar;