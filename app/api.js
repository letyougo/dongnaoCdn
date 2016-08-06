/**
 * Created by surui on 2016/7/27.
 */

var config = require('./config'),
    host = config.param.host

var get = host + '/file/get'

exports.get = function (query,success) {
    request
        .get(get)
        .query(query)
        .end(function (err,res) {
            if(err){return console.log(err)}
            var data = res.body.map(function (obj) {
                obj.Path = obj.Path.split('\\').join('/')
                return obj
            })

            success(data)
        })
}