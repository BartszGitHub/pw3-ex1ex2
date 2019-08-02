var nota1 = 10;
var nota2 = 5;
var nota3 = 7;
var aprovado = "Aprovado";
var reprovado = "Reprovado";
var media = (nota1 + nota2 + nota3) / 3;
console.log("A média é " + media);
if (media > 7) {
    console.log(aprovado + " sua média é " + media);
}
else {
    console.log(reprovado, +" sua média é " + media);
}
