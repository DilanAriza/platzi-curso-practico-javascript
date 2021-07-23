// Código del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");
function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El area del cuadrado: " + areaCuadrado + "cm^2");

console.groupEnd("Cuadrado")

// Código del triangulo

console.group("Triangulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden " +
//     ladoTriangulo1 + "cm, " +
//     ladoTriangulo2 + "cm, " +
//     baseTriangulo + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2")

console.groupEnd("Triangulo")



// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI)

// Circunferencia
function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


// HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}