

var addedText = null;


var addText = document.getElementById("add-item");
var addButton = document.getElementById("add-button");

addText.addEventListener("input", function () {
    addedText = "<div><p>" + this.value + "</p></div>";
});

addButton.addEventListener("click", function () {
    document.getElementById("append").insertAdjacentHTML("beforeend", addedText);
    addedText = null;

});

//var y = document.getElementById("hook");
//y.addEventListener("click", function () {
//    var clickResponse = "Hello";
//    console.log(clickResponse); //note this could be this.value if you wanted to grab a input
//    document.getElementById("append").insertAdjacentHTML("beforeend", clickResponse);
//});
//
//// listening for some typeing and replicating it
//var y = document.getElementById("input-stuff");
//y.addEventListener("input", function () {
//    var addedText = this.value;
//    document.getElementById("append").insertAdjacentHTML("beforeend", addedText.slice(-1));
//});