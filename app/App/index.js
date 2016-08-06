/**
 * Created by surui on 2016/7/27.
 */



import Filecontent from '../file-content'
import CrumbList from '../crumb-list'
import RightKeyMenu from "../rightkey-menu"
import config from '../config'
import api from '../api'

import {pathModel,rightKeyModel,loadModel} from '../model'

import './index.less'
var App = React.createClass({
    mixins:[config.mixin],
    getInitialState:function () {
        return {
            list:[],
            loading:loadModel.get('loading'),
            error:loadModel.get('error'),
            empty:loadModel.get('emtpy'),
            showList:loadModel.get('showList')
        }
    },
    render : function () {
        return (
            <div className="app" onContextMenu={this.contextMenu} onMouseDown={this.mousedown} >
                <h3>小小苏的阿里云</h3>
                <CrumbList/>
                <Filecontent list={this.state.list} loading={this.state.loading} empty={this.state.empty} error={this.state.error} showList={this.state.showList}/>
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
            loadModel.show('loading')
            api.get({path:p},function (res) {
                if(res.length == 0){
                    loadModel.show('empty')
                }else {
                    loadModel.show('list')
                    that.setState({list:res})
                }
            })
        })

        this.listenTo(loadModel,'change',function () {
            that.setState({
                loading:loadModel.get('loading'),
                error:loadModel.get('error'),
                empty:loadModel.get('emtpy'),
                showList:loadModel.get('list')
            })
        })

        pathModel.set('path',this.props.params.splat)
    },
    componentWillReceiveProps:function (nextProps) {
        pathModel.set('path',nextProps.params.splat)
    }
})

module.exports = App