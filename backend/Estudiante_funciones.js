const TextoBienvenida_Estudiante = document.getElementById("MensajeBienvenida_Estudiante");

import {Apelaciones_Pendientes, Sesion_Actual} from './base_de_datos.js'
import {Rzn_Apelacion} from './main.js'

function MostrarBienvenidaEstudiante(){
    TextoBienvenida_Estudiante.innerText =
        `Bienvenido: ${Sesion_Actual.Usuario_Actual.nombre} ${Sesion_Actual.Usuario_Actual.apellido}`;
}

function MarcarPresente(){
    const Clase_Seleccionada = SeleccionarClase_EstudiantePresente.value;

    if (Clase_Seleccionada === "") {
        alert("Seleccione una clase");
        return;
    }

    Sesion_Actual.Usuario_Actual.asistencias[Clase_Seleccionada] = "TRUE";
    Mensaje_Asistencia.innerText =`${Sesion_Actual.Usuario_Actual.nombre} ${Sesion_Actual.Usuario_Actual.apellido} ha sido marcado como PRESENTE en: ${Clase_Seleccionada}`;
}

function EnviarApelacion(){
    const Clase_Seleccionada = SeleccionarClase_EstudianteApelacion.value;
    const MensajeApelacion = Rzn_Apelacion.value;

    if (Clase_Seleccionada === ""){
        alert("Seleccione una clase");
        return;
    }

    const UltimaApelacion = Apelaciones_Pendientes.at(-1);

    const NuevoID = UltimaApelacion ? UltimaApelacion.id + 1 : 1;

    const NuevaApelacion = {
        id: NuevoID,
        nombre: Sesion_Actual.Usuario_Actual.nombre,
        apellido: Sesion_Actual.Usuario_Actual.apellido,
        clase: Clase_Seleccionada,
        razon: MensajeApelacion
    };

    Apelaciones_Pendientes.push(NuevaApelacion);
    Mensaje_Apelacion.innerText = `Se mandó correctamente la apelación a la clase ${Clase_Seleccionada}`;
    console.log(Apelaciones_Pendientes);
};

export {MostrarBienvenidaEstudiante, MarcarPresente, EnviarApelacion}