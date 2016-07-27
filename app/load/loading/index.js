/**
 * Created by surui on 2016/6/14.
 */

require('./index.scss')

var Icon = antd.Icon
var FileLoading = React.createClass({
    render : function () {
        return (
            <div className="file-loading"  style={{display:this.props.display?'block':'none'}}>
                <div className="loading-content">
                    <div className="content-icon"><Icon type="loading"/></div>
                    <div className="content-text">数据正在加载中...</div>
                </div>
            </div>
        )
    }
})

module.exports = FileLoading