let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
    let line = gets('3 -2','8 0', '0 8').split(" ")
    let X = parseInt(line[0])
    let Y = parseInt(line[1])
    if (Y == 0) {
        console.log("divisao impossivel")
    } else {
        let divisao = parseFloat(X/Y).toFixed(1); // Digite aqui o calculo da divisao
        console.log(divisao);
    }
}