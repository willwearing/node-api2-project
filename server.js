const express = require("express");

const postsRouter = require("./data/posts-router.js");

const server = express();

// are where we configure the app/server
server.use(express.json()); // gives Express the ability to parse the req.body
server.use(postsRouter);

server.get("/", (req, res) => {
  res.send(`
    <h2>It's alive!</h>
  `);
});

// common.js equiv of export default
module.exports = server;
