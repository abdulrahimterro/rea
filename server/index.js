const express = require('express');


const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(3001, () => {
    console.log('app is listening on port 3001')
});