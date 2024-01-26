// TODO: Enable strict mode
"use strict";

// TODO: Fix the following parameter list
function parseToJSON(data, data2) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  try 
     {return JSON.parse(data); }
  catch (error)
      {//console.error(error.message);
      return null;}
  finally {

  }
  
  // TODO: if an exception is raised
  // print the error to the console
  // and return null
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

try {
console.log(parseToJSON(failData));}
catch (error2) {console.error(error2.message)}
try{
console.log(parseToJSON(passData));}
catch (error3) {console.error(error3.message)}
