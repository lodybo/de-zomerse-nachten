var gulp = require("gulp"),
    connect = require("gulp-connect"),
    eslint = require("gulp-eslint"),
    uglify = require("gulp-uglify"),
    pump = require("pump"),
    concat = require("gulp-concat"),
    clean = require("gulp-clean"),
    sass = require("gulp-sass");

/**
 * CONNECT TASKS
 */
gulp.task("connect:dev", function () {
    connect.server({
        name: "dev",
        root: ["src", ".tmp"],
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

gulp.task("process:proto", function () {
    gulp.src("_prototype/**/*")
        .pipe(connect.reload());
});

gulp.task("process:dev", ["copy"], function () {
    gulp.src(["src/**/*", ".tmp/**/*"])
        .pipe(connect.reload());
});

/**
 * SCSS
 */
gulp.task("scss", function () {
    return gulp.src("src/**/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(concat("styles.css", {
            newLine: ";"
        }))
        .pipe(gulp.dest("dist/css/"));
});

/**
 * JAVASCRIPT
 */
gulp.task("eslint", function () {
    return gulp.src("src/**/*.js")
        .pipe(eslint({
            configFile: ".eslint.json"
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("concatenate", ["clean"], function () {
    return gulp.src(["bower_components/angular/angular.js", "bower_components/angular-route/angular-route.js", "src/app.js", "src/*/*.js"])
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest(".tmp/"));
});

gulp.task("concatenate:on-the-fly", ["process:dev"], function () {
    return gulp.src(["bower_components/angular/angular.js", "bower_components/angular-route/angular-route.js", "src/app.js", "src/*/*.js"])
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest(".tmp/"));
});

gulp.task("uglify", ["concatenate"], function () {
    pump([
        gulp.src('.tmp/scripts.js'),
        uglify(),
        gulp.dest('dist/')
    ]);
});

/**
 * MISC.
 */
gulp.task("clean", function () {
    return gulp.src(["dist", ".tmp"], { read: false })
        .pipe(clean());
});

gulp.task("copy", ["clean"], function () {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("watch:proto", function () {
    gulp.watch("_prototype/**/*", ["process:proto"]);
});

gulp.task("watch:dev", function () {
    gulp.watch("src/**/*.js", ["eslint", "concatenate:on-the-fly"]);
    gulp.watch("src/**/*.html", ["concatenate:on-the-fly"]);
    gulp.watch("src/**/*.scss", ["scss"]);
});

gulp.task("build", ["scss", "eslint", "uglify", "copy"])

gulp.task("serve:proto", ["connect:proto", "watch:proto"]);
gulp.task("serve:dev", ["build", "connect:dev", "watch:dev"]);
gulp.task("serve", ["serve:proto", "serve:dev"]);