function html() {
    return $.gulp.src($.path.src.html)
        .pipe($.gp.plumber({
            errorHandler : function(err) {
                $.gp.notify.onError({
                    title:    "HTML Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe($.gp.fileInclude())
        .pipe($.gp.htmlmin({
            collapseWhitespace: $.app.isProd
        }))
        .pipe($.gulp.dest($.path.build.html))
        .pipe($.browserSync.stream());
}

module.exports = html;
