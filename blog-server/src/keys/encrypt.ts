/** from: @wfz_8023
 * 1.使用 node-rsa 生成 公钥和私钥
 * @param pkcsType ：pkcs版本(pkcs1/pkcs8)，默认为 pkcs8
 */
const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 512 });
const fs= require('fs');

function generateKeyPair( pkcsType: string = 'pkcs8' ) {
    //创建rsa对象并指定长度；
    //指定加密格式
    key.setOptions({encryptionSchema: pkcsType});

    //生成公钥 私钥
    const publicKey  = key.exportKey(pkcsType + '-public-pem');
    const privateKey = key.exportKey(pkcsType + '-private-pem');
    const publicDerStr = publicKey.toString('base64');
    console.log('publicKey', publicKey);
    fs.writeFile('./public.pem', publicDerStr, (err: any)=>{
        if (err) throw err;
        console.log('公钥已保存');
    });
    fs.writeFile('./private.pem', privateKey, (err: any) => {
        if (err) throw err;
        console.log('私钥已保存');
    })
}
generateKeyPair();
const encryData = key.encryptPrivate('服务端测试 -> jameszou love code~~~', 'base64', 'utf-8');
console.log('\n私钥加密后的数据：\n', encryData); //加密后数据为 base64 编码
const decryptData = key.decryptPublic(encryData, 'utf8');
console.log('\n公钥解密后的数据：\n', decryptData);


//---------------------测试2：服务端加载公钥后解密------------------------
//1.创建RSA对象，并指定 秘钥长度
/*
const key2 = new NodeRSA({ b: pkcsSize });
//2.导入 公钥，并指定使用 pkcs标准，pem格式
key2.importKey(publicPem, pkcsType+'-public-pem');

//3.使用 公钥 解密数据
const decrypted = key2.decryptPublic(encryData, 'utf8');
console.log('\n使用公钥解密后的数据：\n',decrypted);
*/

