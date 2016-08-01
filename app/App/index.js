/**
 * Created by surui on 2016/7/27.
 */

var FileList = require('../file-list'),
    config = require('../config'),
    api = require('../api')

var pathModel = require('../model').pathModel

require('./index.less')
var App = React.createClass({
    mixins:[config.mixin],
    getInitialState:function () {
        return {
            list:[]
        }
    },
    render : function () {
        return (
            <div className="app">
                <h3>{this.props.location.pathname}</h3>
                <FileList list={this.state.list}/>
            </div>
        )
    },
    componentDidMount:function () {
        var that = this

        this.listenTo(pathModel,'change',function () {
            var p = pathModel.get('path')
            api.get({path:p},function (res) {
                that.setState({list:res})
            })
        })

        pathModel.set('path',this.props.params.splat)
    },
    componentWillReceiveProps:function (nextProps) {
        pathModel.set('path',nextProps.params.splat)
    }
})

module.exports = App