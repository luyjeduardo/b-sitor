import { Personavisitante } from "../base/personavisitante";

export class Visitante extends Personavisitante {
    private static _instancia: Visitante;
    public static ObtenerInstancia() : Visitante {
        if(this._instancia === null || this._instancia === undefined) {
            this._instancia = new Visitante;
        }
        return this._instancia;
    }
}
