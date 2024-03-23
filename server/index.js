const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.send("I am an endpoint");
})

app.listen(7777, () => {
    console.log("Server is running on port 7777");
})