const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");
const Controller = require("./controller");

app.use('/', express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/account', (req, res) => {
    Controller.post(req,res);
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))