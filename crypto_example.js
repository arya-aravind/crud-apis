///encryption example using cipher

const crypto = require('crypto');
const cipher = crypto.createCipher('aes192','a password');//using aes192 we are encrypting the second parameter
var encrypted= cipher.update('hii everyone','utf8','hex');
encrypted+= cipher.final('hex');
console.log(encrypted);

///decryption example using decipher
const decipher = crypto.createDecipher('aes192','a password');
var decrypted = decipher.update(encrypted,'hex','utf8');
decrypted+= decipher.final('utf8');
console.log(decrypted);