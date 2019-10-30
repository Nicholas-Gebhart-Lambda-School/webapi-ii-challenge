const express = require("express");
const server = express();
const postsRouter = require("./posts/posts.router");

server.use(express.json());

server.use("/api/posts", postsRouter);

server.listen(8000, () => console.log("server is listening on 8000"));
