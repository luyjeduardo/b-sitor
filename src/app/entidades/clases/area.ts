import { Empresa } from "./empresa";

export class Area {
    private static _instancia: Area;
    private Idarea!: number;
    private Nombre!: string;
    private Idempresa!: number;
    private _Empresa!: Empresa;

    public static ObtenerInstancia(): Area {
        if (this._instancia === null || this._instancia === undefined) {
            this._instancia = new Area;
        }
        return this._instancia;
    }

    set Idarea_(val: number) {
        if (val > 0) {
            this.Idarea = val;
        } else {
            this.Idarea = -1;
        }
    }
    get Idarea_(): number {
        return this.Idarea;
    }

    set Nombre_(val: string) {
        if (val.length > 1 && val.length <= 50) {
            this.Nombre = val;
        } else {
            this.Nombre = "";
        }
    }
    get Nombre_(): string {
        return this.Nombre;
    }

    set Idempresa_(val: number) {
        this.Idempresa = val;
    }
    get Idempresa_(): number {
        return this.Idempresa;
    }

    set Empresa(val: Empresa) {
        this._Empresa = val;
    }
    get Empresa(): Empresa {
        return this._Empresa;
    }

    public ValidarPropiedades(): string {
        if (this.Nombre !== "") {
            if (this.Idempresa > 0) {
                return "success";
            } else {
                return "Debe seleccionar una Empresa ."
            }
        } else {
            return "El nombre debe tener mínimo 2 y máximo 50 caracteres alfabéticos."
        }
    }
}