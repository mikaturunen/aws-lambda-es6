"use strict";

const flow = require("gulp-flowtype");
const gulp = require("gulp");
const babel = require("gulp-babel");
const path = require("path");
const sequence = require("gulp-sequence").use(gulp);

let babelTask;
let typeTask;

gulp.task((babelTask = "babel"), () =>
    gulp
        .src(path.join(__dirname, "./lambda/**/*.js"))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(path.join(__dirname,"./release"))));

gulp.task((typeTask = "typeflow"), () =>
    gulp
        .src(path.join(__dirname, "./lambda/**/*.js"))
        .pipe(flow({
            all: false,
            weak: false,
            declarations: path.join(__dirname, "./declarations"),
            killFlow: false,
            beep: true,
            abort: false,
        })));

gulp.task("default", () => sequence(
    typeTask,
    babelTask
));