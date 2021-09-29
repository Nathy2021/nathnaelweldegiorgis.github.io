
const child_process = require("child_process");
console.log("1: Beginning");
const newProces = child_process.spawn("node", ["app01.js"], { stdio: "inherit" });
console.log("2: Ending");


