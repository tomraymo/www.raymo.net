var gulp = require("gulp"),
    sass = require("gulp-sass"),
    imagemin = require("gulp-imagemin");

var outputDir = "docs",
    sassSources = "src/sass/*.scss",
    imgSources = "src/images/*";

gulp.task("sass", function () {
    gulp.src(sassSources)
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(gulp.dest(outputDir + "/css"));
});

gulp.task("imagemin", function () {
    gulp.src(imgSources)
        .pipe(imagemin())
        .pipe(gulp.dest(outputDir + "/img"));
});

gulp.task("watch", function () {
    gulp.watch(sassSources, ["sass"]);
    gulp.watch(imgSources, ["imagemin"]);
});

gulp.task("default", ["sass", "imagemin", "watch"]);