function jurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}
console.log(jurosSimples(100, 10 / 100, 2));

function jurosCompostos(capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}


console.log(jurosCompostos(100, 10 / 100, 2));
