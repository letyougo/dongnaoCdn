/**
 * Created by surui on 2016/6/8.
 */

var
    Breadcrumb = antd.Breadcrumb,
    Icon = antd.Icon






import api from '../api'
import {pathModel} from '../model'
import {hashHistory} from 'react-router'


import './index.less'
import {mixin} from '../config'
var CrumbList = React.createClass({
    mixins: [mixin],
    getInitialState: function () {
        return {
            path: ['首页']
        }
    },
    render: function () {
        var that = this
        var nodes = this.state.path.map(function (name) {
            return (
                <Breadcrumb.Item onClick={that.handleRoute.bind(that,name)}>{name}</Breadcrumb.Item>
            )
        })

        return (
            <div className="crumb-list">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item onClick={that.handleRoute.bind(this,'')}>首页</Breadcrumb.Item>
                    {nodes}
                </Breadcrumb>
            </div>
        )
    },
    handleRoute:function (p) {
        console.log(p)
        if(p){
            hashHistory.push(pathModel.get('path').match(new RegExp('(.*'+p+').*'))[1])
        }else {
            hashHistory.push("")
        }
    },
    componentDidMount: function () {
        var that = this
        this.listenTo(pathModel, 'change', function () {

            var p = pathModel.get('path').split('\/')
            that.setState({
                path: p
            })
        })
    }
})

module.exports = CrumbList