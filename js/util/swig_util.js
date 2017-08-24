var swig = require('swig');

exports.loadSwigTemplate = function(templatePath, data){
    return swig.renderFile(templatePath, data || {});
}