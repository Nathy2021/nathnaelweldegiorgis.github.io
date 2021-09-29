const express = require("express");
const app = express();
app.set("port", 5353);

app.get("/", function (req, res) {
    res.status(404).send("Hello, This is from Server!");
});
const server = app.listen(app.get("port"), function () {
    const port = server.address().port;
    console.log("Listening to port " + port);
});
