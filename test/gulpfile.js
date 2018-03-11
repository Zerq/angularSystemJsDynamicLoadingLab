/// <binding AfterBuild='copy' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('copy', () => {
    gulp.src('./src/**/*.js').pipe(gulp.dest('./wwwroot/'));
    gulp.src('./src/**/*.ts').pipe(gulp.dest('./wwwroot/'));
    gulp.src('./src/**/*.map').pipe(gulp.dest('./wwwroot/'));
    gulp.src('./src/**/*.html').pipe(gulp.dest('./wwwroot/'));
    gulp.src('./src/**/*.css').pipe(gulp.dest('./wwwroot/'));
    }
);
