const express = require("express");
const app = express();
const port = 7777;

const users = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  //   const email = req.body.email;
  //   const password = req.body.password;

  const { email, nomorHP, jumlahAmal } = req.body;

  users.push({
    email,
    nomorHP,
    jumlahAmal,
  });
  console.log(users);
  res.redirect("/tampilkan-user");
  //   res.send("berhasil");
});

app.get("/tampilkan-user-json", (req, res) => {
  res.json(users);
});

app.get("/tampilkan-user", (req, res) => {
  res.render("users", { users });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost${port}`);
});
