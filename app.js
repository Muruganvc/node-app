const express = require("express");
const app = express();
const demo = require('./display');
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use('/demo', demo);

app.get('/', (req, res) => {
    res.send("Welcome to Node js application");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});