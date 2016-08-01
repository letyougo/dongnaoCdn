/**
 * Created by surui on 2016/7/27.
 */

var fileItem = Backbone.Model.extend({
    defaults:{

    },
    idAttribute:"name"
})
var fileList = Backbone.Collection.extend({
    model : fileItem
})

exports.fileList = new fileList()

var pathModel = Backbone.Model.extend({
    defaults:{
        path : []
    },
    push:function () {
        //this.get('path')
    }
})
exports.pathModel = new pathModel()