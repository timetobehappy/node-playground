var express = require('express');
var useragent = require('express-useragent');

var app = express();
//
const port = process.env.PORT || 3000;
//
//app.use(useragent.express());
app.get('/', (req, res)=>{
    console.log(req.headers['user-agent']);
    res.send(req.headers['user-agent']);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
}).on('error', (err) => {
    console.log("Unable to bind to port")
});;
