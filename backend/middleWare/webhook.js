/**
 * Created by xiaoxiaosu on 16/8/29.
 */
var router = require('express').Router(),
    fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    config = require('../config');

router.post('/webhook',function (req, res) {
    console.log('gitlab request come in ' + req.query.key)
    console.log(req.body)
    res.json(req.body)
})

router.get('/webhook',function (req, res) {
    res.send({'hello':'web hook'})
})

module.exports = router