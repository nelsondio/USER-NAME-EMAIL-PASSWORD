// addItemRoute.js
const db = require('./database.js');
const md5 = require('md5');

module.exports  = async  (req, res) => {
	const item = {
		name: req.body.name,
		email: req.body.email,
		password: (req.body.password),
	}
	await db.storeItem(item);
	res.send(item);
};
