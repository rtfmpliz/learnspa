console.log("Running through the example");
var requireExample = function () {
console.log("requireExample");
}
exports.greetings = "Hello Node";
exports.sayHi = function () {
console.log(exports.greetings);
}