export abstract class Persona {
    private _Id! : number;
    private _Tipodeidentificacion! : string;
    private _Identificacion! : number;
    private _Nombres! : string;
    private _Apellidos! : string;
    private _Perfil! : string;
    private _Correo! : string;
    private _Password! : string;
    private _Password2! : string;

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

    set Tipodeidentificacion(val : string) {
        if(val === "cedula de ciudadanía" || val === "cedula extranjera"){
            this._Tipodeidentificacion = val;
        } else {
            this._Tipodeidentificacion = "";
        }
    }
    get Tipodeidentificacion() : string {
        return this._Tipodeidentificacion;
    }

    set Identificacion(val : number) {
        if(val > 999 && val < 10000000000){
            this._Identificacion = val;
        } else {
            this._Identificacion = -1;
        }
    }
    get Identificacion() : number {
        return this._Identificacion;
    }

    set Nombres(val : string) {
        if(val.length > 1 && val.length <= 25){
            this._Nombres = val;
        } else {
            this._Nombres = "";
        }
    }
    get Nombres() : string {
        return this._Nombres;
    }

    set Apellidos(val : string) {
        if(val.length > 1 && val.length <= 50){
            this._Apellidos = val;
        } else {
            this._Apellidos = "";
        }
    }
    get Apellidos() : string {
        return this._Apellidos;
    }
    
    set Perfil(val : string) {
        if(val === "super administrador" || val === "administrador" || val === "funcionario" || val === "contratista" || val === "visitante"){
            this._Perfil = val;
        } else {
            this._Perfil = "";
        }
    }
    get Perfil() : string {
        return this._Perfil;
    }

    set Correo(val : string) {
        if(val.length > 3 && val.length <= 50){
            this._Correo = val;
        } else {
            this._Correo = "";
        }
    }
    get Correo() : string {
        return this._Correo;
    }

    set Password(val : string) {
        if(val.length > 7 && val.length <= 50){
            this._Password = val;
        } else {
            this._Password = "";
        }
    }
    get Password() : string {
        return this._Password;
    }

    set Password2(val : string) {
        if(val.length > 7 && val.length <= 50){
            this._Password2 = val;
        } else {
            this._Password2 = "";
        }
    }
    get Password2() : string {
        return this._Password2;
    }
}
