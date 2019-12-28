// @ts-ignore
const mongoose = require('mongoose');
// @ts-ignore
const { db } = require('../config');

const { DB_URL } = db;
//禁用缓存
mongoose.set('bufferCommands', false);
//连接数据库
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 3000,
    //使TCP保持活动状态 ：防止由于网络不活动而断开连接
    keepAlive: 120,
});

mongoose.connection.on('connected',function() {
    console.log('Mongoose connection open to ' + DB_URL);
});
/**
 * 连接异常 error 数据库连接错误
 */
mongoose.connection.on('error',function(err :any) {
    console.log('Mongoose connection error: '+ err);
});
/**
 * 连接断开 disconnected 连接异常断开
 */
mongoose.connection.on('disconnected',function() {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
