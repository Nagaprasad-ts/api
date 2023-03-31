// Description: This file contains the code for the index.html page
// write the function to reverse the string and display it with id demo, take input from id inputText
function myFunction() {
    var x = document.getElementById("inputText").value;
    // reverse the value in x
    y = x.split("").reverse().join("");
    document.getElementById("demo").innerHTML = y;
}

console.log("index.js loaded");