import { SuperAdmin } from "./super-admin";

export class Empresa {
    private _Id! : number;
    private _Nit! : number;
    private _Nombre! : string;
    private _Direccion! : string;
    private _Superadmin! : SuperAdmin;

    set Id(val : number) {
        if(val > 0){
            this._Id = val;
        } else {
            this._Id = -1;
        }
    }
    get Id() : number {
        return this._Id;
    }

    set Nit(val : number) {
        if(val > 0){
            this._Nit = val;
        } else {
            this._Nit = -1;
        }
    }
    get Nit() : number {
        return this._Nit;
    }

    set Nombre(val : string) {
        if(val.length > 1 && val.length <= 50){
            this._Nombre = val;
        } else {
            this._Nombre = "";
        }
    }
    get Nombre() : string {
        return this._Nombre;
    }

    set Direccion(val : string) {
        if(val.length > 1 && val.length <= 50){
            this._Direccion = val;
        } else {
            this._Direccion = "";
        }
    }
    get Direccion() : string {
        return this._Direccion;
    }

    set Superadmin(val : SuperAdmin) {
        this._Superadmin = val;
    }
    get Superadmin() : SuperAdmin {
        return this._Superadmin;
    }
}