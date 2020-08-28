"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clases_1 = require("./clases");
//let coche = new Vehiculo(); --> Esto fallaría, no se puede crear una instancia de una clase abstracta
var coche = new clases_1.Coche("Ferrari", 4, "GAN2143-Z", "Testarrosa");
coche.mostrarDatos();
coche.consultarMatricula();
//Tipo: Coche - Fabricante: Ferrari - Número de ruedas: 4 - Apodo: Testarrosa
//La matrícula del coche es GAN2143-Z
var coche2 = new clases_1.Coche("Ferrari", 4, "GAN2143-Z", "Testarrosa");
//coche2 no tendría acceso al método consultarMatricula
coche2.mostrarDatos();
// Sin embargo la ejecución de la clase es la del objeto Coche y no Vehículo
//Tipo: Coche - Fabricante: Ferrari - Número de ruedas: 4 - Apodo: Testarrosa
// Ejemplo de uso de funciones
console.log('2 elevado a 3 es', potencia(2, 3));
function potencia(base, potencia) {
    return Math.pow(base, potencia);
}
