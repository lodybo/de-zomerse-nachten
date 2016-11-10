var gulp = require("gulp"),
    connect = require("gulp-connect");

/**
 * CONNECT TASKS
 */
gulp.task("connect:dev", function () {
    connect.server({
        name: "dev",
        root: "dist",
        host: "127.0.0.1",
        port: 9001,
        livereload: true
    });
});

gulp.task("connect:proto", function () {
    connect.server({
        name: "prototype",
        root: "_prototype",
        host: "127.0.0.1",
        port: 9002,
        livereload: true
    });
});

gulp.task("watch:proto", function () {
    gulp.watch("_prototype/**/*", ["process:proto"]);
});

gulp.task("process:proto", function () {
    gulp.src("_prototype/**/*")
        .pipe(connect.reload());
});

gulp.task("serve:proto", ["connect:proto", "watch:proto"]);