const express = require('express');
const app = express();
const router = require('./routes/routesPosts.js')
app.use(express.json())
const host = 'http://127.0.0.1';
const port = 3002;

app.listen(port,() =>{
    console.log(`Use this link ${host}:${port}`);
})

app.use('/posts', router)