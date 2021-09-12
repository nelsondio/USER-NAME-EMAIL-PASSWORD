// /getItemsRoute.js
const db = require('./database.js');


module.exports = async (req, res) => {
	const items = await db.getItems();
	res.send(items);
};

/*
async function getItemsRoute() {
	const items =  await getItems();
	return items;
}

module.exports = { getItemsRoute, }
*/
