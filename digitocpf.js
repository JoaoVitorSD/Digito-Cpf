let soma = 0;
//digite seu cpf aqui
let cpf = [234395239]
function formataNumero(numero) {
    let numerosplit = numero.toString().split('')
    numerosplit.forEach((element, ind, arr) => arr[ind] = +element)
    return numerosplit
}
(function ultimoDigito() {
    cpf = formataNumero(cpf)
    let u = 0;
    for (u = 0; u < 2; u++) {
        soma = 0
        for (let i = 0; i < cpf.length; i++) {
            soma += cpf[i] * (cpf.length - i + 1);
        }
        let digito = 11 - soma % 11;
        if (digito >= 10) {
            cpf.push(0)
        } else {
            cpf.push(digito)
        }
    }
})();

console.log("O seu cpf é: " + cpf.join(''))