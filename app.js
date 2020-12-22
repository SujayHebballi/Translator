var btntranslator = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output")



function clickEventhandler(){
    outputDiv.innerText = "Ulla"
}

btntranslator.addEventListener("click",clickEventhandler);