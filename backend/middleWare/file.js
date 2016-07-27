/**
 * Created by surui on 2016/7/27.
 */

var router = require('express').Router(),
    fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    config = require('../config')

router.get('/get', function(req, res) {
    var currentDir = config.rootDir,
        query = req.query.path || '';
        currentDir = path.join(config.rootDir,req.query.path)

    var files = fs.readdirSync(currentDir)
    var data = [];
    files.forEach(function (file) {
        var isDirectory = fs.statSync(path.join(currentDir,file)).isDirectory();
        if (isDirectory) {
            data.push({ Name : file, IsDirectory: true, Path : path.join(query, file)  });
        } else {
            var ext = path.extname(file);
            data.push({ Name : file, Ext : ext, IsDirectory: false, Path : path.join(query, file) });
        }
    });
    data = _.sortBy(data, function(f) { return f.Name });
    res.json(data);
});
module.exports = router