const express = require('express');
const woodRoute = require('./routes/wood-route.js');
const furnitureRoute = require('./routes/furniture-route.js');
const app = express();
const port = 5000;

app.use(express.urlencoded({extended: true}));


app.use('/', woodRoute);
app.use('/', furnitureRoute);



app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});