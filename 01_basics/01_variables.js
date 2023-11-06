const accountId = 144553
let accountEmail = "lucky@gmail.com"
var accountPassword = "123456"
accountCity = "Lucknow"

accountEmail = "hdfc@gmail.com"
accountPassword = "21212121"
accountCity = "Noida"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])