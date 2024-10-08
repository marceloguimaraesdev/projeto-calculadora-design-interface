const div = document.getElementById("result")

function adicao(button){

    const value = button.textContent;
    div.textContent += value;

}

function multiplicacao(button){

    const value = button.textContent;
    div.textContent += "*";
}

function divisao(button){
    
    const value = button.textContent;
    div.textContent += value;
}

function subtracao(button){

    const value = button.textContent;
    div.textContent += value;
}

function captureValue(button){

    const value = button.textContent;
    div.textContent += ""+value;
}


function result() {
    let expression = div.textContent;
    let result;

    try {
        // a função eval tenta calcular a expressão matemática e se a expressoão for inválida, é pega pelo catch e mostrado o erro invalid operation.
        result = eval(expression);
    } catch (e) {
        div.textContent = "invalid operation";
        return;
    }

    div.textContent = result;
}

function reset(){
    div.textContent = ""
}

function back(){
    var result = document.getElementById('result').textContent;
    console.log(result.length)
    //a função substring funciona dessa forma porque o ultimo parametro é exclusivo, ou seja, para incluir a string completa tem que ser o indice mais 1
    document.getElementById('result').textContent = result.substring(0, result.length - 1);

}