const Pagina_Inicial = document.getElementById("PaginaInicial");

const IniciarSesion_Usuario = document.getElementById("IniciarSesion");

const Sesion_Estudiante = document.getElementById("Sesion_Estudiante");
const Sesion_Docente = document.getElementById("Sesion_Docente");
const Sesion_Administrador = document.getElementById("Sesion_Administrador");

const Clases_Estudiante = document.getElementById("Clases_EstudiantePresente");
const ModificarEstudiante_Docente = document.getElementById("ModificarEstudiante_Docente");
const Apelacion_Estudiante = document.getElementById("Apelacion_Estudiante");
const AdministrarEstudiantes_Docente = document.getElementById("AdministrarEstudiantes_Docente");
const VerApelaciones_Docente = document.getElementById("VerApelaciones_Docente");

const AdministrarDocentes = document.getElementById("AdministrarDocentes");
const AdministrarClases = document.getElementById("AdministrarClases");
const AñadirDocente_Admin = document.getElementById("AñadirDocente_Admin");
const AsignarDocente_Admin = document.getElementById("AsignarDocente_Admin");
const ModificarDocente_Admin = document.getElementById("ModificarDocente_Admin");
const EliminarDocente_Admin = document.getElementById("EliminarDocente_Admin");
const ModificarClase_Admin = document.getElementById("ModificarClase_Admin");
const AgregarClase_Admin = document.getElementById("AgregarClase_Admin");
const RemoverClase_Admin = document.getElementById("RemoverClase_Admin");

const Boton_Volver = document.querySelectorAll(".Opcion_Volver");

const Secciones = [
    Pagina_Inicial,
    IniciarSesion_Usuario,
    Sesion_Estudiante,
    Sesion_Docente,
    Sesion_Administrador,
    Clases_Estudiante,
    Apelacion_Estudiante,
    AdministrarEstudiantes_Docente,
    ModificarEstudiante_Docente,
    VerApelaciones_Docente,
    AdministrarDocentes,
    AdministrarClases,
    AñadirDocente_Admin,
    AsignarDocente_Admin,
    ModificarDocente_Admin,
    EliminarDocente_Admin,
    AgregarClase_Admin,
    ModificarClase_Admin,
    RemoverClase_Admin
];

let Historial_Secciones = [];

function OcultarTodo() {
    Secciones.forEach(seccion => {
        seccion.classList.add("oculto");
    });
}

function MostrarSeccion(section) {
    const Seccion_Actual = Secciones.find(
        seccion => !seccion.classList.contains("oculto")
    );
    if (Seccion_Actual) {
        Historial_Secciones.push(Seccion_Actual);
    }
    OcultarTodo();
    section.classList.remove("oculto");
}

function VolverSeccion() {
    if (Historial_Secciones.length === 0) {
        return;
    }
    const Seccion_Anterior = Historial_Secciones.pop();
    OcultarTodo();
    Seccion_Anterior.classList.remove("oculto");
}

Boton_Volver.forEach(boton => {
    boton.addEventListener("click", () => {
        VolverSeccion();
    });
});

document.querySelectorAll(".Opcion_VolverInicio").forEach(boton => {
    boton.addEventListener("click", () => {
        VolverAlInicio();
    });
});

function VolverAlInicio() {
    Historial_Secciones.length = 0;
    OcultarTodo();
    Pagina_Inicial.classList.remove("oculto");
}

export {MostrarSeccion, VolverAlInicio}