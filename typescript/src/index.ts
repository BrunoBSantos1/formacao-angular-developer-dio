type heroi = {
    name: string;
    vulgo: string;
}

function printObjetos(pessoa: heroi) {
    console.log(pessoa)
}

function pessoa() {
    printObjetos({
        "name": "Bruno Batista",
        "vulgo": "sil"
    })
}

console.log("Ola mundo")

console.log(pessoa())