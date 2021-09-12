// database.js
// database.js with sql for now
const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');


let db;
const dbName = "db.sqlite3";

db = new sqlite3.Database(dbName,  (err) => {
    if (err) {
        console.error(err.message);
    }
    else {
        console.log('Connected to the db.sqlite3 database.');
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                    db.run(insert, ["admin", "admin@example.com", md5("admin123456")])
                    db.run(insert, ["user", "user@example.com", md5("user123456")])
                }
            });
    }
});

async function getItems(){
	let sql = 'SELECT * FROM user';
	let params = [];

	let myPromise = new Promise ( (resolve, reject) => {
		db.all(sql, params, (err, rows) => {
			console.log(rows); //array of js objects
			if (err) return reject(err);
			resolve(
				rows
				//"resolved!!!"
//				rows.map( item => 
//					Object.assign( {}, item)
//				) //map must be clean, to change a field this is the syntax
			)
		})
	});
	return await myPromise;
};

// db.serialize(() => {
//     db.each(`SELECT PlaylistId as id,
//                     Name as name
//              FROM playlists`, (err, row) => {
//         if (err) {
//             console.error(err.message);
//         }
//         console.log(row.id + "\t" + row.name);
//     });
// });

/*
db.close((err) => {
	if (err)
    		return console.error(err.message);
	console.log("closed database connection")
})
*/
module.exports = {
	getItems,
	db,
}

