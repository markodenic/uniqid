module.exports = module.exports.default  = function (prefix, suffix) {
    var time = Date.now();
    return (prefix || '') + time.toString() + (suffix || '');
};