//Imports.
const { table } = require("table");
const { counter, to2DArray } = require("./counter");

//Testing.
console.log(table(to2DArray(counter("Hello world!"))));
