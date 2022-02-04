const express = require('express');
const dataRoute = require('./routes/wood-furniture-route.js');
const app = express();
const port = 5000;

app.use(express.urlencoded({extended: true}));

app.use('/allItems', dataRoute);



app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});