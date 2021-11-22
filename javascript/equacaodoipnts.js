function limpar() {
    document.getElementById("xpontoa").value = "";
    document.getElementById("xpontob").value = "";
    document.getElementById("ypontoa").value = "";
    document.getElementById("ypontob").value = "";
    document.getElementById("display").value = "";
}

function calculardistancia(){
    var xpontoa = Number(document.getElementById("xpontoa").value);
    var ypontoa = Number(document.getElementById("ypontoa").value);
    var xpontob = Number(document.getElementById("xpontob").value);
    var ypontob = Number(document.getElementById("ypontob").value);


    var primeiraparte = Math.pow((xpontob - xpontoa), 2);
    var segundaparte = Math.pow((ypontob - ypontoa), 2);
    var soma = primeiraparte + segundaparte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado.toFixed(2);
}

function calcularpontomedio() {
    var xpontoa = Number(document.getElementById("xpontoa").value);
    var ypontoa = Number(document.getElementById("ypontoa").value);
    var xpontob = Number(document.getElementById("xpontob").value);
    var ypontob = Number(document.getElementById("ypontob").value);

    var primeiraparte = (xpontoa + xpontob) / 2;
    var segundaparte = (ypontoa + ypontob) / 2;

    document.getElementById("display").value = `PM = (${primeiraparte},${segundaparte})`;
    document.getElementById("display").value = `X = ${xpm} - Y = ${ypm}`;
}

function calcularcoeficiente() {
    var xpontoa = Number(document.getElementById("xpontoa").value);
    var ypontoa = Number(document.getElementById("ypontoa").value);
    var xpontob = Number(document.getElementById("xpontob").value);
    var ypontob = Number(document.getElementById("ypontob").value);

    var partesuperior = ypontoa - ypontob;
    var parteinferior = xpontoa - xpontob;
    var m = partesuperior / parteinferior;
    document.getElementById("display").value = `m = ${m}`;
}

function calcularequacaoreta() {
    var xpontoa = Number(document.getElementById("xpontoa").value);
    var ypontoa = Number(document.getElementById("ypontoa").value);
    var xpontob = Number(document.getElementById("xpontob").value);
    var ypontob = Number(document.getElementById("ypontob").value);

    var mat = [
        [xpontoa, xpontob, 1, xpontoa], 
        [ypontoa, ypontob, 1, ypontoa]
    ]


var n1 = ((-1 * mat[0][1])* mat[1][0]);
var x1 = ((-1 * mat[0][2])* mat[1][1]);
var y1 = ((-1 * mat[0][3])* mat[1][2]);

var n2 = mat[0][0] * mat [1][1];
var x2 = mat[0][1] * mat [1][2];
var y2 = mat[0][2] * mat [1][3];

var somax = x1 + x2;
var somay = y1 + y2;
var soman = n1 + n2;

somax = (somax > 0 ? `+${somax}` : somax);
somay = (somay > 0 ? `+${somay}` : somay);
soman = (soman > 0 ? `+${soman}` : soman);

document.getElementById("display").value = `${somax}x ${somay}y ${soman} = 0`

}
