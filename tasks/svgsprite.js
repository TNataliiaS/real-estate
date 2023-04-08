function svgsprite() {
    return $.gulp.src($.path.src.svisprite)
        .pipe($.gp.plumber({
            errorHandler : function(err) {
                $.gp.notify.onError({
                    title:    "SVG Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe($.gp.newer($.path.build.svgsprite))
        .pipe($.gp.svgSprite({
            shape: {
                transform: [{
                    "svgo": {
                        "plugins": [
                            { removeViewBox: false },
                            { removeUnusedNS: false },
                            { removeUselessStrokeAndFill: true },
                            { cleanupIDs: false },
                            { removeComments: true },
                            { removeEmptyAttrs: true },
                            { removeEmptyText: true },
                            { collapseGroups: true },
                            { removeAttrs: { attrs: '(fill|stroke|style)' } }
                        ]
                    }
                }]
            },
            mode: {
                symbol: {
                    sprite: "../sprite/sprite.svg"
                }
            },
        }))
        .pipe($.gulp.dest($.path.build.images))
        .pipe($.browserSync.stream());
}

module.exports = svgsprite;