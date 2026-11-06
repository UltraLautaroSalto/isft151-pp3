import { Cuentas_Registradas , Sesion_Actual} from "./base_de_datos.js";
import {MostrarInicioSesionUsuario} from './InicioDeSesion.js';

function Registrando_Usuario(){
    const Nuevo_Nombre = R_NOMBRE_Usuario.value;
    const Nuevo_Apellido = R_APELLIDO_Usuario.value;
    const Nueva_Edad = R_EDAD_Usuario.value;
    const Nuevo_Genero = R_GENERO_Usuario.value;
    const Nuevo_Email = R_EMAIL_Usuario.value;
    const Nuevo_Codigo = R_CODIGO_Usuario.value;
    const Nuevo_Rol = R_ROL_Usuario.value;

    if(Nuevo_Nombre.trim() === ""){
        alert("No se a ingresado ningun valor para el nombre, Porfavor asegurese de llenar todos los campos");
        return;
    }
    if(Nuevo_Apellido.trim() === ""){
        alert("No se a ingresado ningun valor para el apellido, Porfavor asegurese de llenar todos los campos");
        return;
    }
    if(Nueva_Edad.trim() === ""){
        alert("No se a ingresado ningun valor para el edad, Porfavor asegurese de llenar todos los campos");
        return;
    }
    if(Nuevo_Genero.trim() === ""){
        alert("No se a seleccionado ningun valor para el genero, Porfavor asegurese de llenar todos los campos")
        return;
    }
    if(Nuevo_Email.trim() === ""){
        alert("No se a ingresado ningun valor para el Email, Porfavor asegurese de llenar todos los campos");
        return;
    }
    if(Nuevo_Codigo.trim() === ""){
        alert("No se a ingresado ningun valor para el codigo, Porfavor asegurese de llenar todos los campos");
        return;
    }

    const UltimoUsuario = Cuentas_Registradas.at(-1);

    const Nuevo_ID = UltimoUsuario ? UltimoUsuario.id + 1 : 1;

    const NuevoUsuario = {
        id: Nuevo_ID,
        nombre: Nuevo_Nombre,
        apellido: Nuevo_Apellido,
        edad: Nueva_Edad,
        genero: Nuevo_Genero,
        email: Nuevo_Email,
        codigo_de_ingreso: Nuevo_Codigo,
        rol: Nuevo_Rol
    }

    Cuentas_Registradas.push(NuevoUsuario);
    Sesion_Actual.Usuario_Actual = NuevoUsuario;
    alert("SE A REGISTRADO CORRECTAMENTE EN LA BASE DE DATOS");
    MostrarInicioSesionUsuario();
    console.log(Cuentas_Registradas);
}

export {Registrando_Usuario}