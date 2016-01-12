var addition = require("./addition.js");
var subtract = require("./subtract.js");
var multiply = require("./multiply.js");
var division = require("./division.js");

var params = process.argv.slice(3);
var result;

switch(process.argv[2]) {
  case "add":
  case "plus":
    result = addition(params);
    break;

    case "sub":
    case "minus":
    case "subtract":
      result = subtract(params);
      break;

    case "multiply":
    case "times":
      result = multiply(params);
      break;

    case "divide":
    case "divided":
      result = division(params);
      break;

    default:
      result = false;
    }
    console.log(result)
