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

    fs.readdir(currentDir, function (err, files) {
        if (err) {
            throw err;
        }
        var data = [];
        files.filter(function (file) {
            return true;
        }).forEach(function (file) {

            try {
                //console.log("processing ", file);
                console.log(query,file,path.join(query,path.basename(file)))
                var isDirectory = fs.statSync(path.join(currentDir,file)).isDirectory();
                if (isDirectory) {
                    data.push({ Name : file, IsDirectory: true, Path : path.join(query, file)  });
                } else {
                    var ext = path.extname(file);

                    data.push({ Name : file, Ext : ext, IsDirectory: false, Path : path.join(query, file) });
                }

            } catch(e) {
                console.log(e);
            }

        });
        data = _.sortBy(data, function(f) { return f.Name });
        console.log(data)
        res.json(data);
    });
});

router.get('/',function (req, res) {
    res.send('hello world')
})
module.exports = router