/**
 * Created by surui on 2016/6/14.
 */

require('./index.less')
var Icon = antd.Icon
var FileEmpty = React.createClass({
    render : function () {
        return (
            <div className="file-empty"  style={{display:this.props.display?'block':'none'}}>
                <div className="empty-content">
                    <div className="content-icon"><Icon type="meh-circle"/></div>
                    <div className="content-text">对不起，数据为空</div>
                </div>
            </div>
        )
    }
})

module.exports = FileEmpty