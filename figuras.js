// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = 5 * 4;

console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado: " + areaCuadrado + "cm^2");

console.groupEnd("Cuadrado")

// Código del triangulo

console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden " +
    ladoTriangulo1 + "cm, " +
    ladoTriangulo2 + "cm, " +
    baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2")

console.groupEnd("Triangulo")


console.group("Circulo")

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm")

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm")

// PI
const PI = Math.PI;
console.log("PI es: " + PI)

// Circunferencia
const circunferenciaCirculo = diametroCirculo * PI;
console.log("El Circunferencia del circulo es: " + circunferenciaCirculo + "cm")

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2")

console.groupEnd("Circulo")