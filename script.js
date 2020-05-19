// Celsius - Fahrenheit n1 * 1.8 + 32
// Fahrenhnheit - Celsius (n1 - 32) / 1.8;

//teste

function refresh() {
    window.location.reload();

}

function submit() {
    const n1 = document.getElementById("txtn1");
    const num = Number(n1.value); // converte de string para numero
    const opt = document.getElementsByName("options"); // pega as opções
    const result = document.getElementById("res");
    const f_c = document.getElementById("f_c"); // fahrenheit para celcius
    const c_f = document.getElementById("c_f"); // celsius para fahrenheit
    const test = num + 2;
    const formCelFah = (num * 1.8) + 32; // fórmula de Fahrenheit para Celcius
    const formFahCel = (num - 32) / 1.8; // fórmula de Celcius para Fahrenheit

    if (f_c.checked) {
        result.innerHTML = `${formFahCel} ° (graus Celsius)`;
    }else if(c_f.checked){
        result.innerHTML = `${formCelFah} F° (Fahrenheits)`;
    }

    result.style.fontSize = "15pt";
    result.style.marginTop = "10px";
    result.style.marginBottom = "10px";
}