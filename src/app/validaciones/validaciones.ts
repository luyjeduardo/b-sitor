import * as $ from 'jquery';

export class Validaciones {

    private static _instancia: Validaciones;
    public static ObtenerInstancia() : Validaciones {
        if(this._instancia === null || this._instancia === undefined) {
            this._instancia = new Validaciones;
        }
        return this._instancia;
    }

    // ValidarContenidoEnLosAtributosParaModificar(Contraseniaactmod: string, Contraseniatempmod: string, Contraseniatempconfmod: string, Apellidostempmod: string, Direcciontempmod: string, Nombrestempmod: string, Correotempmod: string) : boolean{
    //     if (Jquery('#customCheck1').prop('checked') ) {
    //         if(Contraseniaactmod === undefined){
    //             if(Contraseniatempmod !== undefined && Contraseniatempmod !== null && Contraseniatempmod !== "" &&
    //                 Contraseniatempconfmod !== undefined && Contraseniatempconfmod !== null && Contraseniatempconfmod !== ""){
                    
    //             } else {
    //                 return false;
    //             }
    //         } else if(Contraseniaactmod === "") {
    //             return false;
    //         } else {
    //             if(Contraseniatempmod !== undefined && Contraseniatempmod !== null && Contraseniatempmod !== "" &&
    //                 Contraseniatempconfmod !== undefined && Contraseniatempconfmod !== null && Contraseniatempconfmod !== ""){
                    
    //             } else {
    //                 return false;
    //             }
    //         }
    //     }
    //     if(Apellidostempmod !== undefined && Apellidostempmod !== null && Apellidostempmod !== "" &&
    //         Direcciontempmod !== undefined && Direcciontempmod !== null && Direcciontempmod !== "" &&
    //         Nombrestempmod !== undefined && Nombrestempmod !== null && Nombrestempmod !== "" &&
    //         Correotempmod !== undefined && Correotempmod !== null && Correotempmod !== ""){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // ValidarContenidoEnLosAtributosDeUsuario(Apellidostemp: string, Codigodeusuariotemp: string, Contraseniatemp: string, Contraseniatempconf: string, Direcciontemp: string, Nombrestemp: string, Numerodecedulatemp: string, Correotemp: string) : boolean{
    //     if(Apellidostemp !== undefined && Apellidostemp !== null && Apellidostemp !== "" &&
    //        Codigodeusuariotemp !== undefined && Codigodeusuariotemp !== null && Codigodeusuariotemp !== "" &&
    //        Contraseniatemp !== undefined && Contraseniatemp !== null && Contraseniatemp !== "" &&
    //        Contraseniatempconf !== undefined && Contraseniatempconf !== null && Contraseniatempconf !== "" &&
    //        Direcciontemp !== undefined && Direcciontemp !== null && Direcciontemp !== "" &&
    //        Nombrestemp !== undefined && Nombrestemp !== null && Nombrestemp !== "" &&
    //        Numerodecedulatemp !== undefined && Numerodecedulatemp !== null && Numerodecedulatemp !== "" &&
    //        Correotemp !== undefined && Correotemp !== null && Correotemp !== ""){
    //       return true;
    //     } else {
    //       return false;
    //     }
    // }

    public ValidarParseoDeContrasenias(cont1: string, cont2: string): boolean{
        if(cont1 === cont2) {
            return true;
        } else { 
            return false;
        }
    }

    public ValidarLengthDeContrasenias(cont: string) : boolean{
        if(cont.length > 7) {
            return true;
        } else {
            return false;
        }           
    }

    public ValidarCaracteresNumericosYMaxlength(id: string, event: KeyboardEvent, max: number) {
        var cajadetexto = document.getElementById(id) as HTMLInputElement;
        const pattern = /[0-9]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {    
          event.preventDefault();
        } else if(cajadetexto.value.length >= max){
            event.preventDefault();
        }
    }

    public ValidarCaracteresAlfanumericosYMaxlength(id: string, event: KeyboardEvent, max: number) {
        var cajadetexto = document.getElementById(id) as HTMLInputElement;
        const pattern = /[.@0-9a-zA-Z_-]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {    
          event.preventDefault();
        } else if(cajadetexto.value.length >= max){
            event.preventDefault();
        }
    }
    
    public ValidarCaracteresAlfabeticosYMaxlength(id: string, event: KeyboardEvent, max: number) {
        var cajadetexto = document.getElementById(id) as HTMLInputElement;
        const pattern = /[a-zA-Z ]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {    
          event.preventDefault();
        } else if(cajadetexto.value.length >= max){
            event.preventDefault();
        }
    }

    public ValidarMaxlength(id: string, event: KeyboardEvent, max: number) {
        var cajadetexto = document.getElementById(id) as HTMLInputElement;
        if(cajadetexto.value.length >= max){
            event.preventDefault();
        }
    }

    public ValidarEsEmailValido(email: string) : boolean {
        var EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (EMAIL_REGEX.test(email)){
            return true;
        } else{
            return false;
        }
    }
        
    PrevenirPasteInicioDeSesion(){
        $(  
            function PrevenirPaste(){
                var correo : any = document.getElementById('correo');
                var password : any = document.getElementById('password');
                correo.onpaste = function(e : any) { e.preventDefault(); }
                password.onpaste = function(e : any) { e.preventDefault(); }
            }             
        );
    }

    public PrevenirPasteRegistrosGenerales(){
        $(  
            function PrevenirPaste(){
                var identificacion : any = document.getElementById('identificacion');
                var nombres : any = document.getElementById('nombres');
                var apellidos : any = document.getElementById('apellidos');
                var correo : any = document.getElementById('correo');
                var password : any = document.getElementById('password');
                var password2 : any = document.getElementById('password2');
                var destino : any = document.getElementById('destino');
                identificacion.onpaste = function(e : any) { e.preventDefault(); }
                nombres.onpaste = function(e : any) { e.preventDefault(); }
                apellidos.onpaste = function(e : any) { e.preventDefault(); }
                correo.onpaste = function(e : any) { e.preventDefault(); }
                password.onpaste = function(e : any) { e.preventDefault(); }
                password2.onpaste = function(e : any) { e.preventDefault(); }
                destino.onpaste = function(e : any) { e.preventDefault(); }  
            }             
        );
    }

}