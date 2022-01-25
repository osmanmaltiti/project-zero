const express = require('express');
const userRouter = require('./routes/main-route.js');
const app = express();
const port = 5000;
app.use(express.urlencoded({extended: true}));


app.use('/', userRouter);



app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});