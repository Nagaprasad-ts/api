function myFunction() {
    var x = document.getElementById("inputText").value;
    // reverse the value in x
    x = x.split("").reverse().join("");
    document.getElementById("demo").innerHTML = x;
}