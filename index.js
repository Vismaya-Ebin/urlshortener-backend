require('dotenv').config();
const express = require('express');
const app = express();
constPORT = process.env.PORT || 3000;
const cors = require('cors');
const client = require('./db');


//db connection
client();

//middleware
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server listening on port ${process.env.PORT}`);
    }
});