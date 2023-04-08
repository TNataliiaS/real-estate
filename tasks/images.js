function images() {
    return $.gulp.src([$.path.src.images, "!src/assets/images/sprite/*.svg", "!src/assets/images/**/no-webp/**/*.{jpg,jpeg,png,svg,gif,ico,webp}"])
        .pipe($.gp.plumber({
            errorHandler : function(err) {
                $.gp.notify.onError({
                    title:    "IMAGES Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe($.gp.newer($.path.build.images))
        .pipe($.gp.webp())
        .pipe($.gulp.dest($.path.build.images))
        .pipe($.gulp.src([$.path.src.images, "!src/assets/images/sprite/*.svg"]))
        .pipe($.gp.newer($.path.build.images))
        .pipe($.gp.imagemin())
        .pipe($.gulp.dest($.path.build.images))
        .pipe($.browserSync.stream());
}

module.exports = images;