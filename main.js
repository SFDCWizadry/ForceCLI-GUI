function run_cmd(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        me = this;
    child.stdout.on('data', function (buffer) { cb(me, buffer) });
    child.stdout.on('end', end);
}

var foo = new run_cmd(
    'force', [
    	'login', 
    	'-u=<put_username_here>',
    	'-p=<put_password_here>'
    ],
    function (me, buffer) { me.stdout += buffer.toString() },
    function () { console.log(foo.stdout) }
);

document.getElementById('test-soql').addEventListener('click', function (e) {
	var textArea = document.querySelector('#editor');
	var outputDiv = document.querySelector('#output');
	if(textArea.value.trim() !== '') {
		var args1  = ['query', textArea.value];
		var foo = new run_cmd(
		    'force', args1,
		    function (me, buffer) { me.stdout += buffer.toString() },
		    function () { 
		    	var outputStr = foo.stdout;
		    	if(outputStr !== undefined)
		    	{
		    		outputStr = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br />');
			    	if(outputStr.indexOf('undefined') > -1){
			    		outputStr = outputStr.replace('undefined', '');
			    	}
			    	outputDiv.innerHTML = outputStr;
			    	outputDiv.style.display = 'block';
		    	} else {
		    		outputDiv.innerHTML = 'No Data';
			    	outputDiv.style.display = 'block';
		    	}
		   	}
		);
	}
});

var gui = require('nw.gui');
var win = gui.Window.get();
win.on('closed', function() {
	 foo = new run_cmd(
	    'force', [
	    	'logout', 
	    	'-u=<put_username_here>'
	    ],
	    function (me, buffer) { me.stdout += buffer.toString() },
	    function () { console.log(foo.stdout) }
	);
});