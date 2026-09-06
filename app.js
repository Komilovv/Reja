const express = require("express");
const fs = require("fs");
const mongodb = require("mongodb");

module.exports = (db) => {
    console.log("Web serverni boshlash.");

    const app = express();

    let user;
    fs.readFile("database/user.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            user = JSON.parse(data);
        }
    });

    // 1 Kirish codelari
    app.use(express.static("public"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
 
    // 2 Session code
    // 3 Views code
    app.set("view engine", "ejs");
    app.set("views", "views");

    // 4 Routing code
    app.post("/create-item", async (req, res) => {
        try {
            console.log(req.body);
            const new_reja = req.body.plan;
            console.log("Yangi reja:", new_reja);
            const result = await db.collection("plans").insertOne({ plan: new_reja });
            res.json({ _id: result.insertedId, plan: new_reja });
        } catch (err) {
            console.log(err);
            res.end("Something went wrong");
        }
    });

    app.post("/delete-item", async (req, res) => {
        const id = req.body.id;
        await db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) });
        res.json({ state: "success" });
    });

    app.get("/author", (req, res) => {
        res.render("author", { user: user });
    });

    app.get("/", async (req, res) => {
        try {
            const data = await db.collection("plans").find().toArray();
            console.log(data);
            res.render("reja", { plans: data });
        } catch (err) {
            console.log(err);
            res.end("Something went wrong");
        }
    });

    return app;
};