var gui = require('nw.gui');
var appWindow = gui.Window.get();

// Button
var closeBtn  = document.querySelector('#close-btn');
closeBtn.addEventListener('click', function(e) {
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

// Menu
var nativeMenuBar = new gui.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("My App");
appWindow.menu = nativeMenuBar;