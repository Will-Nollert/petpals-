//main index file being run by nodemon 
//can grab client from index.js DB

const { client } = require('./db')

async function getPets() {
    const { rows } =  await client.query(`
    SELECT *
    FROM pets
    `);
    
console.log(rows)
}

async function getOwners() {
    const { rows } =  await client.query(`
    SELECT *
    FROM owners
    `);

    console.log(rows)

}

getPets()
    .then(getOwners)
    .finally(() => {
        client.end();
    })
