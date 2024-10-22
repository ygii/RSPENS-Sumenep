const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set Pug sebagai template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Buat route untuk halaman index
app.get("/", (req, res) => {
  res.render("index.pug");
});

// Buat static folder untuk file CSS dan asset lain
app.use(express.static(path.join(__dirname, "public")));

// Jalankan server di port 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${300}`);
});
