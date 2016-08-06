/**
 * Created by surui on 2016/7/27.
 */



import FileList from '../file-list'
import CrumbList from '../crumb-list'
import RightKeyMenu from "../rightkey-menu"
import config from '../config'
import api from '../api'

import {pathModel,rightKeyModel} from '../model'

import './index.less'
var App = React.createClass({
    mixins:[config.mixin],
    getInitialState:function () {
        return {
            list:[]
        }
    },
    render : function () {
        return (
            <div className="app" onContextMenu={this.contextMenu} onMouseDown={this.mousedown} >
                <h3>小小苏的阿里云</h3>
                <CrumbList/>
                <FileList list={this.state.list}/>
                <RightKeyMenu/>
            </div>
        )
    },
    contextMenu: function (e) {
        e.preventDefault();
    },
    mousedown: function (e) {
        if (e.button == 2) {
            rightKeyModel.show({x: e.pageX, y: e.pageY})
        }
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