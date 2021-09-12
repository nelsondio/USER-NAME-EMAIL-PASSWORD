// /getItemRoute.js
const db = require('./database.js');


module.exports = async (req, res) => {
	let id = req.params.id;
	console.log(`getItemRoute id: ${id} `);
	const item = await db.getOneItem(id);
	res.send(item);
};

/*
async function getItemsRoute() {
	const items =  await getItems();
	return items;
}

module.exports = { getItemsRoute, }
*/
