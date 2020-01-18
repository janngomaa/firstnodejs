const bcrypt = require('bcrypt');
console.log('Hashing password');

let password = "12345";
var hashPwd = await bcrypt.hash(password,10);
console.log(hashPwd);


var hashPassword = async function(){
    console.log(bcrypt.hash(password,10));
    var hashPwd = await bcrypt.hash(password,10);
    console.log(hashPwd);
}

hashPassword();