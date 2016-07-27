/**
 * Created by surui on 2016/6/8.
 */




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
    render:function () {
        var icon
        if(this.props.IsDirectory){
            icon = 'folder'
        }else {
            icon = getFileType(this.props.Ext)
        }

        return (
            <li>
                <Icon type={icon}/>
                <span>{this.props.Name}</span>
            </li>
        )
    }
})

var FileList = React.createClass({
    render : function () {
        var nodes = this.props.list.map(function (obj) {
            return <FileItem Name={obj.Name} Path={obj.Path} IsDirectory={obj.IsDirectory} Ext={obj.Ext}/>
        })
        return (
            <div className="file-list" onClick={this.handleClick}>
                {nodes}
            </div>
        )
    },

})





module.exports = FileList