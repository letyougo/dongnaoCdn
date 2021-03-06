/**
 * Created by surui on 2016/6/8.
 */


require('./index.less')
import {mixin} from '../config'
import {Tooltip} from 'antd'
import {pathModel} from '../model'
import {param} from '../config'
var getFileType = function (ext,bool) {
    if(bool){
        return 'folder'
    }else {
        switch (ext){
            case '.ico':
                return 'picture'
            case '.png':
                return 'picture'
            case '.gif':
                return 'picture'
            case '.jpg':
                return 'file-jpg'
            case '.txt':
                return "file-text"
            case '.pdf':
                return 'file-pdf'
            case '.js':
                return 'code'
            case '.css':
                return 'code'
            case '.less':
                return 'code'
            case '.scss':
                return 'code'
            case '.tpl':
                return 'code'
            case '.html':
                return 'code'
            default :
                return 'file-unknown'
        }
    }
}

var FileItem = React.createClass({
    mixins:[mixin],
    getInitialState(){
        return {
            name : this.props.Name
        }
    },
    render:function () {
        var icon
        if(this.props.IsDirectory){
            icon = 'folder'
        }else {
            icon = getFileType(this.props.Ext)
        }


        return (
            <li className="file-item" onClick={this.handleClick}>
                <span className="file-item-icon"><Icon type={icon}/></span>
                <p>
                    <span className="file-item-name" style={{display:this.props.edit?'none':'block'}}>{this.state.name}</span>
                    <span className="file-item-input" style={{display:this.props.edit?'block':'none'}}><Input ref="input"  onBlur={this.handleBlur} onChange={this.updateState.bind(this,'value')} onPressEnter={this.handleEnter} value={this.state.value}/></span>
                </p>
            </li>
        )
    },
    handleClick:function () {

        if(this.props.IsDirectory){
            ReactHistory.push(this.props.Path)
        }else {
            window.open(param.host+'/'+this.props.Path)
        }
    }
})

var FileList = React.createClass({
    render : function () {
        var nodes = this.props.list.map(function (obj) {
            return <FileItem Name={obj.Name} Path={obj.Path} IsDirectory={obj.IsDirectory} Ext={obj.Ext} key={pathModel.get("path")+'-'+obj.Name}/>
        })
        return (
            <div className="file-list" onClick={this.handleClick} style={{display:this.props.display?'block':"none"}}>
                {nodes}
            </div>
        )
    },

})

import Loading from '../load/loading'
import Empty from '../load/empty'
import Error from '../load/error'


var FileContent = React.createClass({
    render:function () {
        return (
            <div className="file-content">
                <Loading display={this.props.loading}/>
                <Empty display={this.props.empty}/>
                <Error display={this.props.error}/>
                <FileList list={this.props.list} display={this.props.showList}/>
            </div>
        )
    }
})


module.exports = FileContent