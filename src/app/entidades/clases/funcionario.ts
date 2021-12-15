import { Personavisitante } from "../base/personavisitante";

export class Funcionario extends Personavisitante {
    private static _instancia: Funcionario;
    public static ObtenerInstancia() : Funcionario {
        if(this._instancia === null || this._instancia === undefined) {
            this._instancia = new Funcionario;
        }
        return this._instancia;
    }
}