var competidores = 10;
var QtdeFolhas = 90;
var FolhasCompetidor = 10;
var sim = "sim";
var nao = "não";
var suficiente = competidores * FolhasCompetidor;
if (suficiente <= FolhasCompetidor) {
    console.log(sim);
}
else {
    console.log(nao);
}
