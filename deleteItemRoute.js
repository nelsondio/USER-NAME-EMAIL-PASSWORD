// /deleteItemRoute.js
const db = require('./database.js');


module.exports = async (req, res) => {
	let id = req.params.id;
	const item = await db.removeItem(id);
	res.send(item);
};

/*
async function getItemsRoute() {
	const items =  await getItems();
	return items;
}

module.exports = { getItemsRoute, }
*/
