/**
 * Created by shob on 13-07-2017.
 */

var gulp =require('gulp');
var browserify = require('gulp-browserify');

gulp.task('bundle',function(){

    console.log("BUNDLE LOADED");

    gulp.src("./*.src").pipe(browserify()).pipe(gulp.dest("../public"));

});

gulp.task("default",function(){

    gulp.watch("./**/*.src",['bundle']);
});


