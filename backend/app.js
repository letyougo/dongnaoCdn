/**
 * Created by surui on 2016/7/27.
 */
var express = require('express'),
    app = express(),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    //MongoStore = require('connect-mongo')(session),
    mongoose = require('mongoose'),
    path = require('path');


// mongoose.connect('mongodb://127.0.0.1:27017/mi-team');


app.set('view engine', 'ejs');

var rootDir = require('./config').rootDir
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.static(rootDir))
// app.use(session({
//     secret: 'mi-team',
//     cookie: { maxAge: 60 * 1000 * 60 },
//     resave: true,
//     saveUninitialized: true,
//     store: new MongoStore({
//         url: 'mongodb://127.0.0.1:27017/mi-team'
//     })
// }));




app.all('*', function (req, res, next){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
//    res.header("Content-Type", "application/json;charset=utf-8");
    // 排除 非接口路由 和 不需要登陆限制的路由
    next()
});

app.get('/hello',function (req,res) {
    res.render('index')
})
var fileMiddle = require('./middleWare/file'),
    webhook = require('./middleWare/webhook')
app.use('/file',fileMiddle)
app.use('/webhook',webhook)
app.listen(9527)