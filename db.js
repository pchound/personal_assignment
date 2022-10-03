const {MongoClient} = require ('mongodb');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.q4bub0t.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
console.log(uri);





try 
    {
        // Connect to the MongoDB cluster
        client.connect((err) => {
            if (err)
            {
                console.log('Failed to connect to database');
            }
            else
            {
                console.log('Success!');
            }
        })



    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        client.close();
    }

module.exports={client};


/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
 async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};