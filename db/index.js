//start building a database connetion

const pg = require('pg');

const client = new pg.Client(
    "postgres://localhost:5432/petpals"
);

client.connect();

module.exports = {
    client 
}