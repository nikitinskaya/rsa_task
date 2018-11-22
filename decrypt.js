const crypto = require('crypto');
const fs = require('fs');

// Vera Nikitinskaya

const secretPath = "./secret.dms";
const keyPath = "./key.dms";

const decryptWithKey =  (secretPath, keyPath) => {
        const secret = fs.readFileSync(secretPath);
        const key = fs.readFileSync(keyPath);
        const b = new Buffer(secret, "base64");
        const decrypted = crypto.publicDecrypt(key, b);
        return decrypted.toString("utf8");
}

console.log(decryptWithKey(secretPath, keyPath));
