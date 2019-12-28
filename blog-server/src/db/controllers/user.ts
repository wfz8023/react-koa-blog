// @ts-ignore
const userModel = require('../models/user');

const queryUser = async (ctx :any, next :any)=>{
   const result = await userModel.find({});
   console.log('result', result);
   ctx.response = result;
   ctx.body = `<h1>${result[1].name}</h1>`
};

const addUser = async (ctx :any, next :any )=>{
   const req :object = ctx.request.body;
   console.log('req', req);
   const user = new userModel({
      // @ts-ignore
      name: req.username,
      // @ts-ignore
      password: req.password,
      createAt: new Date(),
      lastLoginAt: new Date()
   });
   user.save(function (err:any,ret:any) {
      if(err){
         console.log('保存失败')
      } else {
         console.log('保存成功');
         console.log(ret)
      }   });
   console.log( 'user', user)
};

module .exports = {
   queryUser,
   addUser
};
