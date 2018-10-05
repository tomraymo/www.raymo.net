var gulp = require("gulp"),
    sass = require("gulp-sass");

var sassSources = "src/sass/*.scss";

gulp.task("sass", function () {
    gulp.src(sassSources)
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(gulp.dest("css"));
});

gulp.task("watch", function () {
    gulp.watch(sassSources, ["sass"]);
});

gulp.task("default", ["sass", "watch"]);