export class Empresa {
    private _Id! : number;
    private _Nombre! : string;
    private _Empresa! : Empresa;

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

    set Empresa(val : Empresa) {
        this._Empresa = val;
    }
    get Empresa() : Empresa {
        return this._Empresa;
    }
}