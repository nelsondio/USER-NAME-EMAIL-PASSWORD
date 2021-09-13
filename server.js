//
// user-name-email-passwd ver1.0.0
//
const express = require('express');
const getItemsMain = require('./getItemsRoute');
const addItemRoute = require('./addItemRoute');
const getItemRoute = require('./getItemRoute');
const deleteItemRoute = require('./deleteItemRoute');
const updateItemRoute = require('./updateItemRoute');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send("user-name-email-passwd ver 1.0.0 \n");
});

app.get('/api/users', getItemsMain);

app.post('/api/users', addItemRoute);

app.get('/api/user/:id', getItemRoute);

app.delete('/api/user/:id', deleteItemRoute);

app.put('/api/user/:id', updateItemRoute);

app.listen(3434, (err) => {
	console.log('listening on port 3434');
});

