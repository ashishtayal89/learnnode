const EventEmitter = require("events");
// Streams are Event Emitters
// process.stdin, process.stdout

var myEmitter = new EventEmitter();
myEmitter.on("Test_Emit", () => console.log("Emitted"));
myEmitter.emit("Test_Emit");
