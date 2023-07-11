const valueKg = document.getElementById("kg")
const valueCm = document.getElementById("cm")
const result = document.getElementById("result")
const instruction = document.getElementById("instruction")

let peso = 0;
let altura = 0;

valueCm.addEventListener("input", (event) => {
    altura = (event.target.value) / 100;

    result.innerText = calcIbm();
})

valueKg.addEventListener("input", (event) => {
    peso = event.target.value;

    result.innerText = calcIbm();
    instruction.innerText = "Consulte as tabela informações abaixo para saber as condições do seu IMC"
})

function calcIbm() {
    let result = peso / (altura * altura)
    return result.toPrecision(3);
}

