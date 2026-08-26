console.log("Web serverni boshlash.");
const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code
// 3 Views code
app.set("view engine", "ejs");
app.set("views", "views");

// 4 Routing code
app.get("/hello", (req, res) => {
    res.end("Hello World by Otabek");
});

app.get("/gift", (req, res) => {
    res.end("Gifts for you by Otabek");
});

const server = http.createServer(app);  
let PORT = 3000;
server.listen(PORT, () => { 
    console.log(`Server ${PORT} portda ishga tushdi`);
});