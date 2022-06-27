const express = require("express");
const format = require("date-format");
const app = express();
const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "a_rison",
    followers: 45,
    following: 32,
    date: format.asString("dd/MM/yyyy hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const fbSocial = {
    username: "a_rison",
    followers: 45,
    following: 32,
    date: format.asString("dd/MM/yyyy hh:mm:ss", new Date()),
  };

  res.status(200).json(fbSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinSocial = {
    username: "Aryan Sinha",
    followers: 45,
    following: 322,
    date: format.asString("dd/MM/yyyy hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedinSocial);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
