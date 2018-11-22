const crypto = require('crypto');
const fs = require('fs');

// Vera Nikitinskaya

const secretPath = "./decrypt.js"; // file to encrypt
const keyPath = "./key.dms";

const encryptWithKey =  (secretPath, keyPath) => {
        const secret = fs.readFileSync(secretPath, "utf-8");
        const key = fs.readFileSync(keyPath);
        const b = new Buffer(secret, "base64");
        const encrypted = crypto.publicEncrypt(key, b);
        return encrypted.toString("utf-8");
}

console.log(encryptWithKey(secretPath, keyPath));
