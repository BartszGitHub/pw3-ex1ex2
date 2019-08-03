let competidores: number = 10
let QtdeFolhas: number = 90
let FolhasCompetidor: number = 10

let sim: string = "sim"
let nao: string = "não"


let suficiente: number = competidores *FolhasCompetidor


if (suficiente <= FolhasCompetidor ) {
    console.log(sim)
}
else {
    console.log(nao)
}