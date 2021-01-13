const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./route/api');

//create express app
const app = express();

//server set up
const port = process.env.PORT||3000;

//middlewares
app.use(bodyParser.json());
app.use(cors());

//root route
app.use('/api', api);

//listen for requests
app.listen(port, () => {
    console.log(`running on port: ${port}`);
});
