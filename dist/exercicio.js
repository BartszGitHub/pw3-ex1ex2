var competidores = 10;
var qtdeFolhas = 90;
var folhasCompetidor = 10;
var sim = "sim";
var nao = "não";
var suficiente = (competidores * folhasCompetidor);
if (suficiente <= qtdeFolhas) {
    console.log(sim);
}
else {
    console.log(nao);
}
