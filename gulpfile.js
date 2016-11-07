var gulp = require("gulp"),
    connect = require("gulp-connect");

/**
 * CONNECT TASKS
 */
gulp.task("connect:dev", function () {
    connect.server({
        name: "dev",
        root: "dist",
        port: 9001,
        livereload: true
    });
});

gulp.task("connect:prototype", function () {
    connect.server({
        name: "prototype",
        root: "_prototype",
        port: 9002,
        livereload: true
    });
});