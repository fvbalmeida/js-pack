const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const vrouter = require('./src/routes/vehiclesRoutes');
const db = require("./src/config/dbConfig");


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB CHECK
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ROUTER CONFIG
app.use(vrouter)

// PORT CONFIG
const PORT = process.env.PORT || 3344;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});