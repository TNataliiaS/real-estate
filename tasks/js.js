function js() {
    return $.gulp.src($.path.src.js)
        .pipe($.gp.plumber({
            errorHandler : function(err) {
                $.gp.notify.onError({
                    title:    "JS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe($.gp.if($.app.isDev, $.gp.sourcemaps.init()))
        .pipe($.gp.fileInclude())
        .pipe($.gp.babel())
        .pipe($.gp.if($.app.isDev, $.gulp.dest($.path.build.js)))
        .pipe($.gp.uglify())
        .pipe($.gp.rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe($.gp.if($.app.isDev,$.gp.sourcemaps.write('.')))
        .pipe($.gulp.dest($.path.build.js))
        .pipe($.browserSync.stream());
}

module.exports = js;