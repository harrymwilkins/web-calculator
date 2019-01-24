var result = [false, 0];
var formulaObj = document.querySelector('#js-formula-text');
var resultObj = document.querySelector('#js-result-text');

function updateFormulaBar(value){
    if(result[0]){
        clearFormula();
        if(['+','-','/','*','^'].includes(value)){
            value = result[1] + value;
        }
    }
    if(formulaObj.innerHTML.length < 24){
        formulaObj.innerHTML += value;
    }
}

function clearFormula(){
    formulaObj.innerHTML = "";
    resultObj.innerHTML = "";

    result[0] = false;
}

function backspace(){
    if(result[0]) clearFormula();
    else{
        var forumlaText = formulaObj.innerHTML;
        formulaObj.innerHTML = forumlaText.substr(0,forumlaText.length - 1);
    }
}

function calculate(){
    var formula = formulaObj.innerHTML;
    try{
        var formulaEval = math.eval(formula).toString();
        resultObj.innerHTML = formulaEval;

        result = [true, formulaEval];
    }
    catch(error){
        if(error instanceof SyntaxError){
            return false;
        }
        else{
            console.log(error.message);
        }
    }
}