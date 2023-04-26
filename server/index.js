const http=require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 4500 || process.env.port;

app.use(cors());
app.get("/", (req, res)=>{
    res.send("Hello its working");
})
const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", ()=>{
    console.log("New connection");
})
server.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})