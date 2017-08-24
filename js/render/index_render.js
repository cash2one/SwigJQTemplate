var swigUtil = require('./js/util/swig_util');

$(document).ready(function(){
    $("#confirm_button").on('click', function(e){
        var contentHtml = swigUtil.loadSwigTemplate('./template/index_template.html', {
            user: {
                name: 'Guojm'
            }
        });
        $("#main_content").html(contentHtml);
    });
});


