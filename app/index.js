/**
 * Created by surui on 2016/7/27.
 */
global.React=require('react');
global.ReactDOM=require('react-dom');
global.antd=require('antd');
global.Backbone = require('backbone');
global._ = require('underscore');

global.request = require('superagent');
global.ReactRouter = require('react-router');

global.Icon = antd.Icon;
global.Message = antd.message;
global.Tooltip = antd.Tooltip;
global.Input = antd.Input;
global.Dragger = antd.Dragger;
require('antd/dist/antd.less');

require('./index.css')
var Route = ReactRouter.Route,
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    createHistory = require('history/lib/createHashHistory'),
    ReactHistory = createHistory({ queryKey: false })

global.ReactHistory = ReactHistory
var App = require('./App')





var R = React.createClass({
    render:function () {
        return (
            <Router  history={ ReactHistory } >
                <IndexRoute path="/"  component={App}/>
                <Route path="**"  component={App}/>
            </Router>
        )
    }
})


ReactDOM.render(<R/>,document.getElementById('root'))