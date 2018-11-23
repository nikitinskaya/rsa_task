const crypto=require('crypto'); const fs=require('fs'); /*Vera Nikitinskaya*/;
console.log(crypto.publicDecrypt(fs.readFileSync('./key'),fs.readFileSync('./secret')).toString());
