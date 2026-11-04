const TextoNombreCuenta_Actual = document.getElementById("NombreCuenta_Actual");

import {MostrarSeccion as MSeccion} from './Secciones.js';
import {MostrarBienvenidaEstudiante as  MBEstudiante} from './Estudiante_funciones.js';
import {MostrarBienvenidaDocente as MBDocente} from './Docente_Funciones.js'
import {MostrarBienvenidaAdministrador as MBAdmin} from './Admin_Funciones.js';

import {Cuentas_Registradas, Sesion_Actual} from './base_de_datos.js';

function Boton_Confirmar_Usuario(NM_Usuario, CDG_Usuario){
    const Usuario_NM = NM_Usuario.value;
    const Usuario_CDG = CDG_Usuario.value;

    if(Usuario_NM.trim() === ""){
        alert("El Nombre Ingresado no es valido o se encuentra vacio, Porfavor vuelva a intentarlo");
        return;
    }

    if(Usuario_CDG.trim() === ""){
        alert("La Contraseña Ingresada no es valida o se encuentra vacia, Porfavor vuelva a intentarlo");
        return;
    }

    const Identificar_US = Cuentas_Registradas.find(
        p => p.nombre === Usuario_NM &&
            p.codigo_de_ingreso === Usuario_CDG);

    if(!Identificar_US){
        alert("No se pudo ubicar al Usuario");
        return;
    }

    Sesion_Actual.Usuario_Actual = Identificar_US;

    if (Identificar_US.rol === "Estudiante") {
        TextoNombreCuenta_Actual.textContent = `Sesion Actual: ${Sesion_Actual.Usuario_Actual.nombre} ${Sesion_Actual.Usuario_Actual.apellido}`;
        MSeccion(Sesion_Estudiante);
        MBEstudiante(Identificar_US);
    }

    if(Identificar_US.rol === "Docente"){
        TextoNombreCuenta_Actual.textContent = `Sesion Actual: ${Sesion_Actual.Usuario_Actual.nombre} ${Sesion_Actual.Usuario_Actual.apellido}`;
        MSeccion(Sesion_Docente);
        MBDocente(Identificar_US);
    }

    if(Identificar_US.rol === "Administrador"){
        TextoNombreCuenta_Actual.textContent = `Sesion Actual: ${Sesion_Actual.Usuario_Actual.nombre} ${Sesion_Actual.Usuario_Actual.apellido}`;
        MSeccion(Sesion_Administrador);
        MBAdmin(Identificar_US);
    }
};

export {Boton_Confirmar_Usuario}