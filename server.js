const express = require("express");
const path = require("path");

const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
