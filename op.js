function factorialNum() {

    let numero = document.querySelector('.factorialNum').value;
    let resultNum = document.querySelector('.resultado');

    if (isNaN(numero) || numero === "") {
        resultNum.textContent = "Error";
        return;
    }

    numero = Number(numero);


    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    resultNum.textContent = `El factorial de ${numero} es: ${factorial}`;
}