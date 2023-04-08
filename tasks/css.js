const sass = require("gulp-sass")(require("sass"));

function css() {
    return $.gulp.src($.path.src.css)
        .pipe($.gp.plumber({
            errorHandler : function(err) {
                $.gp.notify.onError({
                    title:    "CSS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe($.gp.if($.app.isDev, $.gp.sourcemaps.init()))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe($.gp.autoprefixer({
            grid: true,
            cascade: true
        }))
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.if($.app.isDev, $.gulp.dest($.path.build.css)))
        .pipe($.gp.cleanCss({
            level: {
                1: {
                    specialComments: 0,
                }
            }
        }))
        .pipe($.gp.rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe($.gp.if($.app.isDev, $.gp.sourcemaps.write('.')))
        .pipe($.gulp.dest($.path.build.css))
        .pipe($.browserSync.stream());
}

module.exports = css;