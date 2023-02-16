const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.Status(400).json({ 'message': 'Username and password are required.' });
  
    const duplicate = await users.find(person => person.username === user);
    if (duplicate) return res.sendStatus(409);
    try {
        const newUser = {
            "username": user,
            "roles": { "User": 2001 },
            "password": password
        };
        usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };