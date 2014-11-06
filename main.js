function run_cmd(cmd, callback){
	var exec = require('child_process').exec;
	var child = exec(cmd, callback);
}

/*function run_cmd(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        me = this;
    console.log('me:' + me);
    child.stdout.on('data', function (buffer) { cb(me, buffer); });
    child.stdout.on('end', end);
}*/

window.onload = function (){
	var loginbtn = document.getElementById('loginbtn');
	loginbtn.addEventListener(
		'click', function (e) {
			var uninput = document.querySelector('#un');
			var username = uninput.value;
			var password = document.querySelector("#pass").value;

			var foo = new run_cmd(
				"force login -u=" + username +" -p=" + password,
				function(error, stdout, stderr){
					console.log('stdout: ' + stdout);
			    	console.log('stderr: ' + stderr);
			    	console.log('err: ' + error);

			      	var resultobj = document.querySelector("#loginresult");
			    	console.log(resultobj);

			    	if (error !== null) {
			      		console.log('exec error: ' + error);
			      		resultobj.innerHTML = error;
			      		uninput.value = username;
			    	} else {
			    		//debugger;
			    		resultobj.innerHTML = stdout;
			    		uninput.value = username;
			    	}
				}
			);
		}
	);
};
/*

var gui = require('nw.gui');
var win = gui.Window.get();
win.on('closed', function() {
	 foo = new run_cmd(
	    'force', [
	    	'logout', 
	    	'-u=cy.appcom_dev2@terrasky.co.jp'
	    ],
	    function (me, buffer) { me.stdout += buffer.toString() },
	    function () { console.log(foo.stdout) }
	);
});*/