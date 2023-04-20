const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

//encrypting a password
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        //Password must be stored to database
    });
});

//check password during authentication, load in hash from database
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});

bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
});