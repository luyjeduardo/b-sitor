import { Persona } from "./persona";

export abstract class Personavisitante extends Persona {
    private _Estado! : string;
    private _Destino! : string;
    private _Pathfoto! : string;
    private _Fechadeentrada! : Date;
    private _Fechadesalida! : Date;

    set Estado(val : string) {
        if(val === "activo" || val === "inactivo"){
            this._Estado = val;
        } else {
            this._Estado = "";
        }
    }
    get Estado() : string {
        return this._Estado;
    }

    set Destino(val : string) {
        if(val.length > 1 && val.length <= 30){
            this._Destino = val;
        } else {
            this._Destino = "";
        }
    }
    get Destino() : string {
        return this._Destino;
    }

    set Pathfoto(val : string) {
        if(val.length >= 20){
            this._Pathfoto = val;
        } else {
            this._Pathfoto = "";
        }
    }
    get Pathfoto() : string {
        return this._Pathfoto;
    }

    set Fechadeentrada(val : Date) {
        this._Fechadeentrada = val;
    }
    get Fechadeentrada() : Date {
        return this._Fechadeentrada;
    }

    set Fechadesalida(val : Date) {
        this._Fechadesalida = val;
    }
    get Fechadesalida() : Date {
        return this._Fechadesalida;
    }
}