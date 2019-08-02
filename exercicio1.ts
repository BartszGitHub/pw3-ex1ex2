let nota1: number = 10
let nota2: number = 5
let nota3: number = 7
let aprovado: string = "Aprovado"
let reprovado: string = "Reprovado"

let media: number = (nota1 + nota2 + nota3) / 3

console.log("A média é " + media)

if (media > 7) {
    console.log(aprovado + " sua média é " + media)
}
else {
    console.log(reprovado, + " sua média é " + media)
}

