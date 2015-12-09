const flow = require("gulp-flowtype");
const gulp = require("gulp");
const babel = require("gulp-babel");
const path = require("path");

gulp.task("default", function() {
    return gulp
        .src(path.join(__dirname, "./lambda/**/*.js"))
        .pipe(flow({
            all: false,
            weak: false,
            declarations: path.join(__dirname, "./declarations"),
            killFlow: false,
            beep: true,
            abort: false
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(path.join(__dirname,"./release")));
});
