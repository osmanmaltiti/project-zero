const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({extended: true}));

const dummyData = require('./dummyData');

let jsonData = null;

app.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const data = {username: username};
    jsonData = data
    console.log(data);
    res.redirect('/homepage');
});

app.get('/api/data', (req, res) => {
   res.json(dummyData)
});

console.log(jsonData)
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});