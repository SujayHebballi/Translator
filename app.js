var btntranslator = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-area");

console.log(textInput)

function clickEventhandler(){
    console.log("Clicked");
    console.log("Input :",textInput.value)
}

btntranslator.addEventListener("click",clickEventhandler);