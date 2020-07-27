var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('src/*.js')
        .pipe(uglify().on('error', function(e){
            console.log('error: ',e);
         }))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dist/'))
});