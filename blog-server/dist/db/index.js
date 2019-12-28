"use strict";
const mongoose = require('mongoose');
// 链接数据库一定放在koa前面
mongoose.connect("mongodb://127.0.0.1/www", { useNewUrlParser: true });
// 获取数据库表对应的js对象所在的路径
mongoose.connection.on('connected', () => { console.log('mongoose, is connected'); });
module.exports = mongoose;
//# sourceMappingURL=index.js.map