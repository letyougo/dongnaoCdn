/**
 * Created by surui on 2016/7/27.
 */
var host = 'http://10.235.134.10:9527'

exports.param = {
    host:host
}

exports.mixin = {
    componentDidMount:function () {
        _.extend(this,Backbone.Events)
    },
    componentWillUnmount:function () {
        this.stopListening()
    },
    componentWillMount:function () {
        var that = this
        this.updateState = function (name, e) {
            var obj = {}
            obj[name] = e.target.value
            that.setState(obj)
        }
        this.toggleState = function (name,e) {
            var obj = {}
            obj[name] = !that.state[name]
            that.setState(obj)
        }
    }
}