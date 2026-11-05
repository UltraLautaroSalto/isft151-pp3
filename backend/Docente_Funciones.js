const TextoBienvenida_Docente = document.getElementById("MensajeBienvenida_Docente");

const Boton_GuardarCambios_Estudiante = document.getElementById("Boton_GuardarCambios_Estudiante");
const Boton_EliminarEstudiante_Clase = document.getElementById("Boton_EliminarEstudiante_Clase");

import {Sesion_Actual, Cuentas_Registradas, Apelaciones_Pendientes} from './base_de_datos.js'
import {ObtenerClaseDocente} from './cargadores.js';
import {MostrarSeccion} from './Secciones.js';

let Estudiante_Modificando = null;

function MostrarBienvenidaDocente(){
    TextoBienvenida_Docente.innerText = 
        `Bienvenido: ${Sesion_Actual.Usuario_Actual.nombre} ${Sesion_Actual.Usuario_Actual.apellido}`;
}

function CargarEstudiantesDocente() {
    TablaEstudiantes_Docente.innerHTML = "";

    const Clase_Docente = ObtenerClaseDocente();
    //console.log(Clase_Docente);

    if (!Clase_Docente) {
        InformacionClase_Docente.innerText ="El docente no tiene ninguna clase asignada.";
        return;
    }

    InformacionClase_Docente.innerText =
        `Clase: ${Clase_Docente.Materia} Docente: ${Sesion_Actual.Usuario_Actual.nombre}`;

    Clase_Docente.Estudiantes.forEach(nombreEstudiante => {
        const estudiante = Cuentas_Registradas.find(
            usuario => usuario.nombre === nombreEstudiante && usuario.rol === "Estudiante"
        );

        if (!estudiante) {
            return;
        }

        const fila = document.createElement("tr");
        const nombre = document.createElement("td");
        nombre.innerText =`${estudiante.nombre} ${estudiante.apellido}`;
        const presente = document.createElement("td");
        presente.innerText = estudiante.asistencias[Clase_Docente.Materia];
        const acciones = document.createElement("td");
        const botonModificar = document.createElement("button");
        botonModificar.innerText = "Modificar estudiante";
        acciones.appendChild(botonModificar);

        botonModificar.addEventListener("click", () => {
            Estudiante_Modificando = estudiante;
            Modificar_Nombre.value = estudiante.nombre;
            Modificar_Apellido.value = estudiante.apellido;
            Modificar_Edad.value = estudiante.edad;
            const Asistencia_Actual = estudiante.asistencias[Clase_Docente.Materia];
            Modificar_Asistencia.value = Asistencia_Actual;
            MostrarSeccion(ModificarEstudiante_Docente);
        });
        fila.appendChild(nombre);
        fila.appendChild(presente);
        fila.appendChild(acciones);
        TablaEstudiantes_Docente.appendChild(fila);
    });

    Boton_GuardarCambios_Estudiante.addEventListener("click", () => {
        if (Estudiante_Modificando === null) {
            return;
        }

        const Clase_Docente = ObtenerClaseDocente();

        if (!Clase_Docente) {
            return;
        }
        const NombreAnterior = Estudiante_Modificando.nombre;
        Estudiante_Modificando.nombre = Modificar_Nombre.value;
        Estudiante_Modificando.apellido = Modificar_Apellido.value;
        Estudiante_Modificando.edad = Modificar_Edad.value;
        Estudiante_Modificando.asistencias[Clase_Docente.Materia] = Modificar_Asistencia.value;

        const Posicion_Estudiante = Clase_Docente.Estudiantes.indexOf(NombreAnterior);

        if (Posicion_Estudiante === -1) {
            alert("No se pudo encontrar al usuario en la clase");
            return;
        }

    Clase_Docente.Estudiantes[Posicion_Estudiante] = Modificar_Nombre.value;
        Mensaje_ModificarEstudiante.innerText = "Los cambios fueron guardados correctamente.";
        CargarEstudiantesDocente();
    });

    Boton_EliminarEstudiante_Clase.addEventListener("click", () => {
        if (Estudiante_Modificando === null) {
            return;
        }
        
        const Clase_Docente = ObtenerClaseDocente();

        if (!Clase_Docente) {
            return;
        }

        const Posicion_Estudiante = Clase_Docente.Estudiantes.indexOf(Estudiante_Modificando.nombre);
        if (Posicion_Estudiante === -1) {
            return;
        }
        Clase_Docente.Estudiantes.splice(Posicion_Estudiante,1);
        Mensaje_ModificarEstudiante.innerText = "El estudiante fue eliminado de esta clase.";
        Estudiante_Modificando = null;
        CargarEstudiantesDocente();
        MostrarSeccion(AdministrarEstudiantes_Docente);
    });
}

function Mostrar_Apelaciones() {
    const Contenedor = document.getElementById("ContenedorApelaciones_Actuales");

    Contenedor.replaceChildren();

    if(Apelaciones_Pendientes.length === 0){
        Contenedor.textContent = "No hay apelaciones pendientes.";
        return;
    }

    // Recorremos todas las apelaciones.
    Apelaciones_Pendientes.forEach(Apelacion => {

        const Tarjeta = document.createElement("div");
        const Nombre = document.createElement("h3");
        const Apellido = document.createElement("h3");
        const Clase = document.createElement("h3");
        const Motivo = document.createElement("p");
        const BotonAprobar = document.createElement("button");
        const BotonRechazar = document.createElement("button");

        Nombre.textContent = Apelacion.nombre;
        Apellido.textContent = Apelacion.apellido;
        Clase.textContent = Apelacion.Clase_Seleccionada;
        Motivo.textContent = Apelacion.Razon_Apelacion;

        BotonAprobar.textContent = "Aprobar";
        BotonRechazar.textContent = "Rechazar";

        BotonAprobar.addEventListener("click", () => {
            Resolver_Apelacion(Apelacion.id, true);
        });

        BotonRechazar.addEventListener("click", () => {
            Resolver_Apelacion(Apelacion.id, false);
        });

        Tarjeta.append(Nombre, Apellido, Clase, Motivo, BotonAprobar, BotonRechazar);

        Contenedor.appendChild(Tarjeta);
    });
}

function Resolver_Apelacion(ID_Apelacion, Aprobada) {
    const Indice = Apelaciones_Pendientes.findIndex(
        Apelacion => Apelacion.id === ID_Apelacion
    );

    if (Indice === -1) {
        alert("No se encontró la apelación.");
        return;
    }

    const Apelacion = Apelaciones_Pendientes[Indice];

    if (Aprobada) {
        alert("Se aprobó la apelación de " + Apelacion.nombre, " " + Apelacion.apellido);
    } else {
        alert("Se rechazó la apelación de " + Apelacion.nombre, " " + Apelacion.apellido);
    }

    Apelaciones_Pendientes.splice(Indice, 1);

    Mostrar_Apelaciones();
}

export {MostrarBienvenidaDocente, CargarEstudiantesDocente, Mostrar_Apelaciones}