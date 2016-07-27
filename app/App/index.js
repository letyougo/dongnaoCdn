/**
 * Created by surui on 2016/7/27.
 */

var FileList = require('../file-list'),
    config = require('../config'),
    api = require('../api')
var App = React.createClass({
    mixins:config.mixin,
    getInitialState:function () {
        return {
            list:[]
        }
    },
    render : function () {
        return (
            <div>
                <FileList list={this.state.list}/>
            </div>
        )
    },
    componentDidMount:function () {
        var that = this
        api.get({path:''},function (res) {
            that.setState({list:res})
        })
    }
})

module.exports = App