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

var FileList = React.createClass({
    render : function () {

        return (
            <div className="file-list"  style={{display:this.props.display?'block':'none'}} onClick={this.handleClick}>
                aaa
            </div>
        )
    },

})





module.exports = FileList