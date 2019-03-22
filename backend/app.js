const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added success"
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "sadfsdf",
      title: "First server post",
      content: "THis is from the server"
    },
    {
      id: "sadweq1fsdf",
      title: "Second server post",
      content: "THis is from the server"
    }
  ];

  res.status(200).json({ message: "Post succe", posts: posts });
});

module.exports = app;
