var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var cleanCSS     = require('gulp-clean-css');
var img          = require('gulp-image');

gulp.task('sass', function () {
	return gulp.src('app/public/stylesheets/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('../server/app/public/stylesheets'));
});

gulp.task('scripts', function(){
	return gulp.src('app/public/javascripts/**/*.js')
		.pipe(gulp.dest('../server/app/public/javascripts'))
});

gulp.task('html', function(){
    return gulp.src('app/views/**/*.html')
        .pipe(gulp.dest('../server/app/views'))
});


gulp.task('img', function(){
	return gulp.src('app/public/images/**/*')
		.pipe(img())
		.pipe(gulp.dest('../server/app/public/images'))
});

gulp.task('watch', function(){
    gulp.watch('app/public/stylesheets/**/*.scss', ['sass']);
	gulp.watch('app/public/javascripts/**/*.js', ['scripts']);
    gulp.watch('app/views/**/*.html', ['html']);
	gulp.watch('app/public/images/**/*', ['img']);
});

gulp.task('build', ['sass', 'scripts', 'html', 'img', 'watch']);