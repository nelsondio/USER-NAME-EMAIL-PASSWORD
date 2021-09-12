//
// user-name-email-passwd ver1.0.0
//
const express = require('express');
const getItemsMain = require('./getItemsRoute');
//const addItem = require('./addItem');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send("user-name-email-passwd ver 1.0.0 \n");
});

app.get('/api/users', getItemsMain);
app.get('/api/users', (req, res) => {
	res.send('/api/users get all\n');
});

//app.post('/api/users', addItem);

app.listen(3434, (err) => {
	console.log('listning on port 3434');
});

