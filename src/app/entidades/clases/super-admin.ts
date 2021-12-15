import { Persona } from "../base/persona";

export class SuperAdmin extends Persona {
    private static _instancia: SuperAdmin;
    public static ObtenerInstancia() : SuperAdmin {
        if(this._instancia === null || this._instancia === undefined) {
            this._instancia = new SuperAdmin;
        }
        return this._instancia;
    }
}
