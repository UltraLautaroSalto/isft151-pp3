const TextoNombreCuenta_Actual = document.getElementById("NombreCuenta_Actual");

import {Sesion_Actual, Cuentas_Registradas} from "./base_de_datos.js";
import {VolverAlInicio} from './Secciones.js';

function SeleccionarOpcion_SesionActiva(){
    const Opcion_Elegida = OpcionesSesion_Activa.value;

    if(Sesion_Actual.Usuario_Actual == null){
        alert("No hay una cuenta iniciada en este momento");
        return;
    }else{
        switch(Opcion_Elegida){
            case "":
                alert("Porfavor seleccione una de las demás opciones");
            break;
            case "OpcionesSesion_primera":
                console.log("El usuario quiere cambiar su contraseña");
                const Codigo_Ingresado = prompt("Ingrese su nueva contraseña");

                if(Codigo_Ingresado === null || Codigo_Ingresado === ""){
                    alert("La contraseña ingresada no es valida o no se ingreso, porfavor vuelva a intentarlo");
                    return;
                }

                const Confirmacion_CambiarCodigo = confirm("¿Esta seguro que desea cambiar la contraseña?");

                if(!Confirmacion_CambiarCodigo){
                    alert("Se cancelo el cambio de contraseña");
                    break;
                }

                Sesion_Actual.Usuario_Actual.codigo_de_ingreso = Codigo_Ingresado;
                alert("Tu contraseña a sido cambiada correctamente");
            break;
            case "OpcionesSesion_segunda":
                const Confirmacion_CerrarCuenta = confirm("¿Esta seguro de que desea cerrar su sesion?");

                if(!Confirmacion_CerrarCuenta){
                    alert("Se cancelo el cerrado de sesion");
                    break;
                }

                Sesion_Actual.Usuario_Actual = null;
                TextoNombreCuenta_Actual.textContent = ``;
                VolverAlInicio();
            break;
            case "OpcionesSesion_tercera":
                console.log("El Usuario quiere eliminar su cuenta");
                const EliminarCuenta_Codigo = prompt("Ingrese su contraseña")

                if(EliminarCuenta_Codigo === null || EliminarCuenta_Codigo === ""){
                    alert("Eliminiacion Cancelada");
                    break;
                }

                if(EliminarCuenta_Codigo !== Sesion_Actual.Usuario_Actual.codigo_de_ingreso){
                    alert("La contraseña ingresada es incorrecta");
                    break;
                }
                
                const Confirmacion_EliminarCuenta = confirm("Esta seguro que desea eliminar su cuenta? Esta accion es permanente");
                
                if(!Confirmacion_EliminarCuenta){
                    alert("Eliminacion Cancelada");
                    break;
                }

                const IndiceCuenta = Cuentas_Registradas.findIndex(cuenta => cuenta === Sesion_Actual.Usuario_Actual);

                if(IndiceCuenta !== -1){
                    Cuentas_Registradas.splice(IndiceCuenta, 1);
                    Sesion_Actual.Usuario_Actual = null;
                    TextoNombreCuenta_Actual.textContent = ``;

                    alert("Tu cuenta fue Eliminada exitosamente de la base de datos");
                    VolverAlInicio();
                } else {
                    alert("no se a encontrado la cuenta que desea eliminar.");
                }
            
            break;
            default:
                alert("Opcion seleccionada invalida, porfavor vuela a intentarlo");
            break;
        }
}
};

export {SeleccionarOpcion_SesionActiva}