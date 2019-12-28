"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const mongoose = require('./db');
const app = new Koa();
const router = new Router();
// const ModelDb = require('./db');
router.get('/', async (ctx) => {
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        name: String
    });
    const User = mongoose.model('www', UserSchema, 'user');
    User.find({}, function (res, err) {
        console.log(res, err);
    });
});
router.get('/wat', async (ctx) => {
    ctx.body = '<h1>22222</h1>';
});
app.use(router.routes());
app.listen(80);
console.log("app is running ...");
//# sourceMappingURL=app.js.map