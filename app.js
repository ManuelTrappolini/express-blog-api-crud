const express = require('express');
const app = express();

const host = 'http://127.0.0.1';
const port = 3002;

app.listen(port,() =>{
    console.log(`Use this link ${host}:${port}`);
})

