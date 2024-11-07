const express = require('express');
const app = express();
const router = require('./routes/routesPosts.js')
app.use(express.json())
const notFoundMiddleware = require('./Middleware/notFoundMiddleware.js')
const logger = require('./Middleware/logger.js')
const postControllers = require('./Controllers/post.js')
const host = 'http://127.0.0.1';
const port = 3002;

app.listen(port,() =>{
    console.log(`Use this link ${host}:${port}`);
})


app.get('/', postControllers.index)

app.use('/posts', router)

app.use(logger)

app.use(notFoundMiddleware)