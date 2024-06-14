//EVENT using button click in node js is not possible
// we cannot make button in node js so for events we do this using API

const express = require("express");
const EventEmitter = require("events");

const app = express();

const event = new EventEmitter();
let count = 0;
event.on("countApi", () => {
  count++;
  console.log("event called", count);
});
app.get("/", (req, resp) => {
  resp.send("api called");
  event.emit("countApi");
});
app.get("/update", (req, resp) => {
  resp.send("update api called");
});
app.get("/search", (req, resp) => {
  resp.send(" search api called");
});

app.listen(2000);
