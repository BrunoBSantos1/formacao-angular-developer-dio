"use strict";
function printObjetos(pessoa) {
    console.log(pessoa);
}
function pessoa() {
    printObjetos({
        "name": "Bruno Batista",
        "vulgo": "sil"
    });
}
console.log("Ola mundo");
console.log(pessoa());
