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
                aaaaa
                {/*<FileList list={this.state.list}/>*/}
            </div>
        )
    },
    componentDidMount:function () {
        api.get({path:''},function (res) {
            console.log(res)
        })
    }
})

module.exports = App