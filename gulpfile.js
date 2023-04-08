" use strict";

global.$ = {
    // Packages
    gulp: require("gulp"),
    gp: require('gulp-load-plugins')(),
    browserSync: require("browser-sync").create(),

    // Config
    path: require("./config/path.js"),
    app: require("./config/app.js")
}

// Tasks
const requireDir = require('require-dir');
const task = requireDir("./tasks", {recurse: true});

function watchFiles() {
    $.gulp.watch([$.path.watch.html], task.html);
    $.gulp.watch([$.path.watch.css], task.css);
    $.gulp.watch([$.path.watch.js], task.js);
    $.gulp.watch([$.path.watch.images], task.images);
    $.gulp.watch([$.path.watch.svgsprite], task.svgsprite);
    $.gulp.watch([$.path.watch.fonts], task.fonts);
}

const build = $.gulp.series(task.clean, $.gulp.parallel(task.html, task.css, task.js, task.images, task.svgsprite, task.fonts));
const dev = $.gulp.series(build, $.gulp.parallel(watchFiles, task.server));

// Exports Tasks
exports.html = task.html;
exports.css = task.css;
exports.js = task.js;
exports.images = task.images;
exports.svgsprite = task.svgsprite;
exports.fonts = task.fonts;
exports.clean = task.clean;


// Assembly
exports.default = $.app.isProd
    ? build
    : dev;