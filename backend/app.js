const express = require("express");

const app = express();

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
