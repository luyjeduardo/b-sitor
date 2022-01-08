import { SuperAdmin } from "./super-admin";

export class Empresa {
    private static _instancia: Empresa;
    private Idempresa! : number;
    private Nit! : number;
    private Nombre! : string;
    private Direccion! : string;
    private Idsuperadmin!: number;
    private _Superadmin! : SuperAdmin;

    public static ObtenerInstancia() : Empresa {
        if(this._instancia === null || this._instancia === undefined) {
            this._instancia = new Empresa;
        }
        return this._instancia;
    }

    set Idempresa_(val : number) {
        if(val > 0){
            this.Idempresa = val;
        } else {
            this.Idempresa = -1;
        }
    }
    get Idempresa_() : number {
        return this.Idempresa;
    }

    set Nit_(val : number) {
        if(val > 99999999 && val < 10000000000){
            this.Nit = val;
        } else {
            this.Nit = -1;
        }
    }
    get Nit_() : number {
        return this.Nit;
    }

    set Nombre_(val : string) {
        if(val.length > 1 && val.length <= 50){
            this.Nombre = val;
        } else {
            this.Nombre = "";
        }
    }
    get Nombre_() : string {
        return this.Nombre;
    }

    set Direccion_(val : string) {
        if(val.length > 4 && val.length <= 50){
            this.Direccion = val;
        } else {
            this.Direccion = "";
        }
    }
    get Direccion_() : string {
        return this.Direccion;
    }

    set Idsuperadmin_(val : number) {
        if(val > 0){
            this.Idsuperadmin = val;
        } else {
            this.Idsuperadmin = -1;
        }
    }
    get Idsuperadmin_() : number {
        return this.Idsuperadmin;
    }

    set Superadmin(val : SuperAdmin) {
        this._Superadmin = val;
    }
    get Superadmin() : SuperAdmin {
        return this._Superadmin;
    }

    public ValidarPropiedades() : string {
        if (this.Nit !== -1) {
            if (this.Nombre !== "") {
                if (this.Direccion !== "") {
                    if (this.Idsuperadmin !== -1) {
                        return "success";
                    } else {
                        return "La empresa debe tener un súper administrador.";
                    }
                } else {
                    return "La dirección debe ser válida, como mínimo 5 caractéres y máximo 50.";  
                }
            } else {
                return "El nombre debe estar comprendido entre 2 y 50 caractéres alfabéticos.";      
            }
        } else {
            return "Por favor digite un nit válido, comprendido entre 9 y 10 dígitos.";
        }
    }
}