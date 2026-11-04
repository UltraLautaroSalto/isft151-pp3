import {Clases_Actuales, Sesion_Actual, Cuentas_Registradas} from './base_de_datos.js'

function CargarClases(select){
    Clases_Actuales.forEach(clase => {
        const opcion = document.createElement("option");
        opcion.value = clase.Materia;
        opcion.textContent = clase.Materia;
        select.appendChild(opcion);
    });
}

function ObtenerClaseDocente() {
    return Clases_Actuales.find(
        clase => clase.Docente_Asignado === Sesion_Actual.Usuario_Actual.nombre
    );
}

function ObtenerDocentes() {
    return Cuentas_Registradas.find(
        docente => docente.Docente_Asignado === "Docente"
    );
}

function CargarDocentes(select) {
    const docentes = Cuentas_Registradas.filter(
        cuenta => cuenta.rol.toLowerCase() === "docente"
    );

    docentes.forEach(docente => {
        const opcion = document.createElement("option");
        opcion.value = docente.nombre + " " + docente.apellido;
        opcion.textContent = `${docente.nombre} ${docente.apellido}`;
        select.appendChild(opcion);
    });
}

export {CargarClases, ObtenerClaseDocente, ObtenerDocentes, CargarDocentes}