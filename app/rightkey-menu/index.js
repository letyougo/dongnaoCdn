/**
 * Created by surui on 2016/6/12.
 */

import './index.less'



import {Modal,Message,Popconfirm} from 'antd'


import {rightKeyModel} from '../model'


import api from '../api'


var RightKeyMenu = React.createClass({
    
    getInitialState:function () {
        return {
            display : rightKeyModel.get('display'),
            pos : rightKeyModel.get('pos'),
            visible:false
        }  
    },
    
    render : function () {
        return (
            <ul className="rightkey-menu"
                style={{display:this.state.display ? 'block' : 'none',
                left:this.state.pos.x+'px',top:this.state.pos.y+'px'}}
                onClick={this.handleClick}
            >

                <li className="allow" >新建文件夹</li>
                <li className="allow" onClick={this.rename}>重命名</li>
                <li className="allow" >删除</li>
                <li className="allow" >复制</li>
                <li className="allow" >粘贴</li>
                <li className="allow" >粘贴</li>
            </ul>
        )
    },

    confirm:function () {
        this.deleteFile()
    },

    rename:function (e) {

        if(this.state.privateFolderAction){
            fileList.trigger('rename')
        }else {
            Message.warn('你没有对该文件夹操作的权限')
        }
    },
    deleteFile:function () {
        // var item = fileList.getPickedItem()
        // var name = pathModel.get('path')+'/'+item.get('Name')
        //
        // api.deleteFile({path:name},function (res) {
        //     fileList.remove(item)
        //     Message.success('成功删除文件(夹)')
        // })
    },
    newFolder:function (e) {
        // if(this.state.privateFolderAction){
        //     fileList.trigger('newFolder')
        // }else {
        //     Message.warn('你没有对该文件夹操作的权限')
        // }
        // rightKeyModel.hide()
    },
    routeToMyTeam:function (e) {
        var name = userModel.getMyTeamPath()
        history.push(name)
    },

    routeToMyFolder:function () {
        var name = userModel.getMyFolderPath()
        history.push(name)
    },

    
    componentDidMount : function () {
        var that = this
        rightKeyModel.on('change',function () {
            that.setState({
                display : rightKeyModel.get('display'),
                pos : rightKeyModel.get('pos'),
            })
        })
    },

    handleClick: function () {
        rightKeyModel.hide()
    }
})

module.exports = RightKeyMenu