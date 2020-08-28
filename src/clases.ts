export abstract class Vehiculo{
    // propiedades - Pueden ser privadas, públicas y protected
    //  * privada               -> sólo accesible desde la clase.
    //  * pública (por defecto) -> Acessible también desde el exterior.
    //  * protected             -> Accesible desde la clase y las que cuelgan de ella.
    //
    //  Definimos la clase como abstract para que no se pueda instanciar. El export
    //    sirve para que podamos importar la clase desde fuera de este fichero.
    protected tipo: string;
    protected fabricante: string;
    protected numRuedas: number;

    apodo:string;

    constructor(fabricante: string, numRuedas: number,
                apodo?:string){
       this.tipo = 'Vehiculo';
       this.fabricante = fabricante;
       this.numRuedas = numRuedas;

       if (apodo){
           // Al ponerle el signo ? le digo que puede que venga o no
           this.apodo = apodo;
       }else{
           this.apodo = '';
       }
    }

    mostrarDatos(){
        console.log(`Tipo: ${this.tipo} - Fabricante: ${this.fabricante} - Número de ruedas: ${this.numRuedas} - Apodo: ${this.apodo}`);
    }
}

export class Coche extends Vehiculo{
    // Coche es clase hija de Vehículo. Hereda todas las propiedades y métodos que no
    //   sean privados (incluido el constructor si no lo hemos definido).
    // 
    // Podríamos incluir nuevas propiedades y métodos o redefinir las existentes.

    private matricula: string;

    constructor(fabricante: string, numRuedas: number,matricula:string,apodo?:string){
        //Llamo al constructor del padre para generar cargar esas propiedades
        super(fabricante, numRuedas,apodo); 
        this.tipo = 'Coche'; 
        this.matricula = matricula;
    }
    consultarMatricula(){
        console.log(`La matrícula del coche es ${this.matricula}`);
    }
}