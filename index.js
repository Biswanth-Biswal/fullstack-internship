const express = require("express");

const app = express();
const PORT = 3000;

// simple route
app.get("/", (req, res) => {
    res.send("Hello from my first REST API");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});