import { Persona } from "../base/persona";

export class Admin extends Persona {
    private static _instancia: Admin;
    public static ObtenerInstancia() : Admin {
        if(this._instancia === null || this._instancia === undefined) {
            this._instancia = new Admin;
        }
        return this._instancia;
    }
}
