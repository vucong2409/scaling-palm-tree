const express = require("express");
const path = require("path");

const app = express();
const PORT = "3000";

app.listen(PORT, "localhost",() => {
	console.log(`Listening at http://localhost:${PORT}`);
	app.use(express.static(path.join(__dirname, "public")));
});

app.get("/",(req,res) => {
    res.sendFile("index.html", { root: __dirname });
});