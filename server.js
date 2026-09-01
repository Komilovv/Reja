const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString = "mongodb://Otabek:s6FMWVBlO4Sft3iC@ac-f4keexs-shard-00-00.murbvev.mongodb.net:27017,ac-f4keexs-shard-00-01.murbvev.mongodb.net:27017,ac-f4keexs-shard-00-02.murbvev.mongodb.net:27017/?ssl=true&replicaSet=atlas-43dt5e-shard-0&authSource=admin&appName=Cluster0";

const client = new MongoClient(connectionString);

client.connect()
    .then(() => {
        console.log("MongoDB connection succeeded.");
        const db = client.db("Reja");
        const app = require("./app")(db);
        const server = http.createServer(app);

        const PORT = 3000;
        server.listen(PORT, () => {
            console.log(`Server ${PORT} portda ishga tushdi, http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error on connection MongoDB:", err);
    });