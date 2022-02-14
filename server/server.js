const express = require('express');
const userRoute = require('./routes/user-route.js');
const dataRoute = require('./routes/wood-furniture-route.js');
const app = express();
const port = 5000;

app.use(express.json());

app.use('/users', userRoute);
app.use('/items', dataRoute);




app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});