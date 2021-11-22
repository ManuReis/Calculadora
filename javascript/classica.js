const display = document.getElementById("display");
var numeronovo = true
var operador;
var numeroanterior;

function inserirnumero(numero) {
atualizardisplay(numero);
}

function atualizardisplay(numero){
if(numeronovo == true){
    display.value = numero;
    numeronovo = false;
}else{
    display.value += numero;
}
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function selecionaroperacao(operacaoselecionada){
    if(!numeronovo){
        calcular();
numeronovo = true;
operador = operacaoselecionada;
numeroanterior = Number(display.value);
    }
}

function operacaopendente() {
    return operador !== undefined;
}

function calcular() {
    if(operacaopendente() == true){
var numeroatual = Number(display.value);
numeronovo = true;

if(operador == "+"){
    atualizardisplay(numeroanterior + numeroatual);
}else if(operador == "-"){
    atualizardisplay(numeroanterior - numeroatual);
}else if(operador == "*"){
    atualizardisplay(numeroanterior * numeroatual);
}else if(operador == "/"){
    atualizardisplay(numeroanterior / numeroatual);
}

    }
}

function chamarigual() {
    calcular();
    operador = undefined;
}

function limpar() {
    display.value = "0";
    numeronovo = true;
    numeroanterior = undefined;
    operador = undefined;
}

function inserirdecimal() {
    if(display.value.indexOf(".") == -1){
        if(display.value.length > 0){
atualizardisplay('.');
        }else {
atualizardisplay('0.')
        }

    }

}

function clicoutecla(event){
 
    switch(event.key){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        inserirnumero(event.key)
        break;
        case 'Delete':
            backspace();
            break;
            case '+':
            case '-':
            case '/':
            case '*':
                selecionaroperacao(event.key)
                break;
                case 'p':
                selecionaroperacao('+');
                case 'c':
                    limpar();
                    break;
                    case '=':
                        case 'Enter':
                    chamarigual();
                    break;
                    case '.':
                        case ',':
                            inserirdecimal();


    }
    
}