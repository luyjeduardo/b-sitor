import { Area } from "../clases/area";
import { Empresa } from "../clases/empresa";
import { Persona } from "./persona";

export abstract class Personavisitante extends Persona {
    private _Estado! : string;
    private _Idempresa! : number;
    private _Idarea! : number;
    private _Pathfoto! : string;
    private _Fechadeentrada! : Date;
    private _Fechadesalida! : Date;
    private _Empresa! : Empresa;
    private _Area! : Area;

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

    set Idempresa(val : number) {
        this._Idempresa = val;
    }
    get Idmpresa() : number {
        return this._Idempresa;
    }

    set Idarea(val : number) {
        this._Idarea = val;
    }
    get Idarea() : number {
        return this._Idarea;
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

    set Empresa(val : Empresa) {
        this._Empresa = val;
    }
    get Empresa() : Empresa {
        return this._Empresa;
    }

    set Area(val : Area) {
        this._Area = val;
    }
    get Area() : Area {
        return this._Area;
    }
}