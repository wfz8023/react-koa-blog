import * as Koa from 'koa';
import * as Router from 'koa-router';
const cors = require('koa2-cors');
const { db } = require('./config');

const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

const {queryUser, addUser}= require('./db/controllers/user');

router.get('/', queryUser);
router.post('/addUser', addUser);

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.listen(80);

console.log("app is running ...");
