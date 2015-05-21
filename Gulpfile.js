var gulp = require('gulp'),
	NwBuilder = require('node-webkit-builder');

gulp.task('copy', function() {
	return gulp.src(['css/*.css', 'js/*.js', 'index.html', 'package.json'], {base: './'})
		.pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', ['copy'], function() {


  var nw = new NwBuilder({
  	version: '0.12.1',
    files: './dist/**/**', // use the glob format
    platforms: ['osx32', 'osx64', 'win32', 'win64']
	});

	//Log stuff you want

	nw.on('log',  console.log);

	// Build returns a promise
	nw.build().then(function () {
		console.log('all done!');
	}).catch(function (error) {
		console.error(error);
	});
});