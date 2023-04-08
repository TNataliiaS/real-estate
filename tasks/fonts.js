function fonts() {
    return $.gulp.src($.path.src.fonts)
        .pipe($.gp.plumber({
            errorHandler : function(err) {
                $.gp.notify.onError({
                    title:    "FONTS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe($.gp.newer($.path.build.fonts))
        .pipe($.gp.fonter({
            formats: ['woff']
        }))
        // сonnect other formats
        // .pipe($.gp.fonter({
        //     formats: ['woff', 'ttf', 'eot']
        // }))
        .pipe($.gulp.dest($.path.build.fonts))
        .pipe($.gulp.src($.path.src.fonts))
        .pipe($.gp.ttf2woff2())
        .pipe($.gulp.dest($.path.build.fonts))
        .pipe($.browserSync.stream());
}

module.exports = fonts;