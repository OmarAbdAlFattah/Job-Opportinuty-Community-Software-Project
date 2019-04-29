const http = require('http');
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const Port = process.env.port || 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hostpassword',
    database: 'nodesql',
    port: '3000'
});

function handleDissconnection() {


    db.connect((err) => {
        if (err) throw err;
        console.log("db connected");
        setTimeout(handleDisconnect, 2000);
    });

    db.on('error', (err) => {
        console.log('db error ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect(); // lost due to either server restart, or a
        } else { // connnection idle timeout (the wait_timeout
            throw err; // server variable configures this)
        }
    });
}
handleDissconnection();

const app = express();

app.get('/profile', (req, res) => {

    res.sendFile(path.join(__dirname + '/index.html'));
    let sql = "CREATE DATABASE nodesql";
    //let sql = "INSERT INTO post VALUES (1, 1, \"this is my first post\")";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)ك
    });
    //    res.send("database connected succefully...");
    // res.end();
});


//app.use(express.json());


app.listen(Port, () => console.log(`listening on port ${Port}...`));
