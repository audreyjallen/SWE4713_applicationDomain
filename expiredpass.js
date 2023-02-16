const paperstack = require('paperstack')

const user = new paperstack(email, password, userSecret, userID)
user.init()
module.exports = user

var counter = 0;
