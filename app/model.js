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

var rightKey = Backbone.Model.extend({
    defaults: {
        display: false,
        pos : {x:0,y:0},
        privateFolderAction:true
    },
    show : function (pos) {
        this.set({
            display:true,
            pos : pos
        })
    },
    hide : function () {
        this.set('display',false)
    }
})


exports.rightKeyModel = new rightKey()

var loadModel = Backbone.Model.extend({
    defaults:{
        loading:false,
        error:false,
        empty:false,
        list:true
    },
    show:function (type) {
        var obj = {
            loading:false,
            error:false,
            empty:false,
            list:false
        }
        obj[type] = true
        this.set(obj)
    }
})

exports.loadModel = new loadModel()