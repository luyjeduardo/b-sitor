export class Servidorapirest {
    private _Urlapirestfull: string = "https://bsitor-web.herokuapp.com/api/";

    private static _instancia: Servidorapirest;
    public static ObtenerInstancia() : Servidorapirest {
        if(this._instancia === null || this._instancia === undefined) {
            this._instancia = new Servidorapirest;
        }
        return this._instancia;
    }
    
    get Urlapirestfull() : string {
        return this._Urlapirestfull;
    }
}