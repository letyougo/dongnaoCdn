/**
 * Created by surui on 2016/6/14.
 */

require('./index.scss')
var Icon = antd.Icon
var FileError = React.createClass({
    render : function () {
        return (
            <div className="file-error"  style={{display:this.props.display?'block':'none'}}>
                <div className="error-content">
                    <div className="content-icon"><Icon type="frown-circle"/></div>
                    <div className="content-text">发生未知错误</div>
                </div>
            </div>
        )
    }
})

module.exports = FileError