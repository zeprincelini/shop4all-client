const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//create express app
const app = express();

//server set up
const port = process.env.PORT||3000;

//middlewares
app.use(bodyParser.json());
app.use(cors());

//root route
app.get('/', (req, res) => {
    res.send('welcome');
});

//listen for requests
app.listen(port, () => {
    console.log(`running on port: ${port}`);
});
