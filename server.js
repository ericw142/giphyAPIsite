const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

// Starts our server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
