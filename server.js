// This is the Node.js server module for my React based web scraper.  Because the front-end is written
// with React, the Node server is really only serving API routes.

// Require the Node modules needed for the application
const chalk = require("chalk");
const express = require("express")();
// const path = require("path");
const server = require("http").Server(express);
const io = require("socket.io")(server);

// And get my modules
const api = require("./routes/api")(io);
// const api = require("./routes/html");

// Configure Express.js
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', api);
// do i need html routes for this application?
// app.use('/', htmlRoutes);

const PORT = process.env.PORT || 4000;

server.listen(PORT, function()
{   console.log(chalk.green("server listening on port: ", PORT))
})

io.on ("connection", function(socket)
{   socket.emit("Hello");
})
