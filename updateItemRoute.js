// db.updateItemRoute
const md5 = require('md5');
const db = require('./database.js');

module.exports = async (req, res) => {
    let newItem = {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password),
    }
    let id = req.params.id;
    let item = await db.updateItem(id, newItem);
    res.send(item);
}



