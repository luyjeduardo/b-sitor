import { Personavisitante } from "../base/personavisitante";

export class Contratista extends Personavisitante {
    private static _instancia: Contratista;
    public static ObtenerInstancia() : Contratista {
        if(this._instancia === null || this._instancia === undefined) {
            this._instancia = new Contratista;
        }
        return this._instancia;
    }
}