const http = require('http');
const express = require('express');

const path = require('path');

const mysql = require('mysql');
const port = process.env.port || 8080;
const app = express();

app.get('/profile', (req, res) => {

    //    console.log(result);
    res.sendFile(path.join(__dirname + '/profile.html'));
    //res.send("HELLO!");
});

app.listen(port, () => console.log(`listening on port ${port}...`));