/**
 * Created by xiaoxiaosu on 16/8/29.
 */
var router = require('express').Router(),
    fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    config = require('../config');

router.post('/webhook',function (req, res) {
    console.log(req.body.payload)
    res.send(req.body.payload)
})

router.get('/webhook',function (req, res) {
    res.send({'hello':'web hook'})
})

module.exports = router