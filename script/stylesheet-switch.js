var currentStyle = "light";
var styleObj = document.querySelector('#js-scheme-sheet');

function updateStyles(){
    currentStyle = (currentStyle == "light") ? "dark" : "light";
    styleObj.setAttribute("href","styles/"+currentStyle+".css");
}