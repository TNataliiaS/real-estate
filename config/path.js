const srcPath = "src/";
const buildPath = "dist/";

module.exports = {
    root: buildPath,

    build: {
        html:   buildPath,
        css:    buildPath + "assets/css/",
        js:     buildPath + "assets/js/",
        images: buildPath + "assets/images/",
        svgsprite: buildPath + "/assets/images/sprite/*.svg",
        fonts:  buildPath + "assets/fonts/"
    },
    src: {
        html:   srcPath + "*.html",
        css:    srcPath + "assets/scss/*.scss",
        js:     srcPath + "assets/js/*.js",
        images: srcPath + "assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
        svisprite: srcPath + "assets/images/sprite/*.svg",
        fonts:  srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    watch: {
        html:   srcPath + "**/*.html",
        css:    srcPath + "assets/scss/**/*.scss",
        js:     srcPath + "assets/js/**/*.js",
        images: srcPath + "assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
        svgsprite: srcPath + "assets/images/sprite/*.svg",
        fonts:  srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
}