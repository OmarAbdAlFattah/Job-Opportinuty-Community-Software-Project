const http = require('http');
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const Port = process.env.port || 3000;

const db = mysql.createConnection({
    host: 'root',
    user: 'localhost',
    password: 'hostpassword',
    database: 'my_db',
    port: '3000'
});

db.connect((err) => {
    if (err) throw err;
    console.log("db connected");
});

const app = express();

app.get('/profile', (req, res) => {

    console.log(result);
    res.sendFile(path.join(__dirname + '/profile.html'));
    let sql = "CREATE DATABASE my_db";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("database connected succefully...");
    })
});


//app.use(express.json());

app.listen(Port, () => console.log(`listening on port ${Port}...`));