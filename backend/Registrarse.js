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