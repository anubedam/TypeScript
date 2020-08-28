"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coche = exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(fabricante, numRuedas, apodo) {
        this.tipo = 'Vehiculo';
        this.fabricante = fabricante;
        this.numRuedas = numRuedas;
        if (apodo) {
            // Al ponerle el signo ? le digo que puede que venga o no
            this.apodo = apodo;
        }
        else {
            this.apodo = '';
        }
    }
    Vehiculo.prototype.mostrarDatos = function () {
        console.log("Tipo: " + this.tipo + " - Fabricante: " + this.fabricante + " - N\u00FAmero de ruedas: " + this.numRuedas + " - Apodo: " + this.apodo);
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var Coche = /** @class */ (function (_super) {
    __extends(Coche, _super);
    function Coche(fabricante, numRuedas, matricula, apodo) {
        var _this = 
        //Llamo al constructor del padre para generar cargar esas propiedades
        _super.call(this, fabricante, numRuedas, apodo) || this;
        _this.tipo = 'Coche';
        _this.matricula = matricula;
        return _this;
    }
    Coche.prototype.consultarMatricula = function () {
        console.log("La matr\u00EDcula del coche es " + this.matricula);
    };
    return Coche;
}(Vehiculo));
exports.Coche = Coche;
