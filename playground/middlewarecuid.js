require('dotenv').config();
const express = require('express');
const cuid = require('cuid');

const app = express();
const port = process.env.PORT || 3000;
// request id middleware
// const requestId = (req, res, next) => {
//     const requestId = cuid();
//     req.id = requestId;
//     res.id = requestId;
//     console.log(`Request Id: ${requestId}`);
//     // pass continuation to next middleware
//     next();
// };

//app.use(requestId);
app.use((req, res, next) => {
    const requestId = cuid();
    req.id = requestId;
    res.id = requestId;
    console.log(`Request Id: ${requestId}`);
    // pass continuation to next middleware
    next();
});

app.get('/', (req, res) => {
    res.send('\n\nHello, world!\n\n');
});

app.listen(port, () => {
    console.log(`listening on port ${ port }`);
});

module.exports = app;
