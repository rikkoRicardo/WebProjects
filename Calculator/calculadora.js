function clean() {
    resultado.E.value = "";
    resultado.R.value = "";
}

function calculate() {
    if (resultado.E.value != "" || isFinite(resultado.E.value)) {
        resultado.R.value = eval(resultado.E.value);
    }
    else {
        resultado.R.value = "Conta inválido";
    }
}

function digito(num) {
    resultado.E.value += num;
}

function mouseOver(id) {
    document.getElementById(id).style.background='purple';
}

function mouseOut(id) {
    document.getElementById(id).style.backgroundColor='pink';
}

function Data1(){
    let data1 = new Date();
 Data.D.value= data1.toDateString();
}