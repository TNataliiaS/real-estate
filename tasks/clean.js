const del = require("del");

function clean() {
    return del($.path.root);
}

module.exports = clean;