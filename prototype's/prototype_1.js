let Cuentas_Registradas = [
    {nombre: "Jorge", apellido: "Torres", edad: "16", genero: "Masculino", codigo_de_ingreso: "1234", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},
    {nombre: "Maria", apellido: "Gutierrez", edad: "15", genero: "Femenino", codigo_de_ingreso: "4321", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},
    {nombre: "Alex", apellido: "Santos", edad: "17", genero: "Sin Identificar", codigo_de_ingreso: "9999", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},

    {nombre: "Lance", apellido: "Vanze", edad:"34", genero: "Masculino", codigo_de_ingreso: "VanceLastDance9876", rol: "Docente"},
    {nombre: "Denise", apellido: "Robinson", edad:"45", genero: "Femenino", codigo_de_ingreso: "CJMYLOVE6789", rol: "Docente"},
    {nombre: "Niko", apellido: "Bellic", edad:"54", genero:"Masculino", codigo_de_ingreso: "STIWTDFLTITVWLF", rol: "Docente"},

    {nombre: "Ralph", apellido: "Philips", edad:"53", genero: "Masculino", codigo_de_ingreso: "AM128894", rol: "Administrador"}
];

let Clases_Actuales = [
    {Carrera: "Analista de Sistemas", Materia: "Algoritmo y Estructura de Datos 1", Año: "1°", Docente_Asignado: "Lance Vance", ID: "1"},
    {Carrera: "Analista de Sistemas", Materia: "Practicar Profecionalizantes 3", Año: "3°", Docente_Asignado: "Denise Robinson", ID: "2"},
    {Carrera: "Analista de Sistemas", Materia: "Matematicas 2", Año: "2°", Docente_Asignado: "Niko Bellic", ID: "3"}
];

let Usuario_Actual = null;
let Apelacion_Actual = "";

const Pagina_Inicial = document.getElementById("PaginaInicial"); // La Pagina Principal

// Botones Para Mostrar una Seccion especifica
const MostrarInicioSesionUsuario = document.getElementById("Boton_Iniciar_Sesion_Usuario") // Funcion para controlar la visibilidad de "IniciarSesion_Usuario"
const MarcarPresente_Estudiante = document.getElementById("Boton_MarcarPresente_Estudiante"); // Seccion que se ocupa de mostrar la tabla de clases y le permite al usuario marcar presente en X Clase

const Boton_MarcarPresente_Estudiante = document.getElementById("Boton_MarcarPresente_Estudiante"); // Boton que controla la visibilida de la seccion "Clases_Estudiante"
const Boton_MandarApelacion_Estudiante = document.getElementById("Boton_MandarApelacion_Estudiante"); // Boton que controla la visibilidad de la seccion "Apelacion_Estudiante"

// Mensajes
const TextoBienvenida_Estudiante = document.getElementById("MensajeBienvenida_Estudiante"); // Funcion que muestra el texto de Bienvenida del Estudiante
const TextoBienvenida_Docente = document.getElementById("MensajeBienvenida_Docente"); // Funcion que muestra el texto de Bienvenida del Docente
const TextoBienvenida_Administrador = document.getElementById("MensajeBienvenida_Administrador"); // Funcion que muestra el texto de Bienvenida del Administrador

// Funciones Principales
const IniciarSesion_Usuario = document.getElementById("IniciarSesion") // Seccion donde ocurre el Inicio de Sesion del Usuario
const Sesion_Estudiante = document.getElementById("Sesion_Estudiante") // Seccion de la Sesion del Estudiante
const Sesion_Docente = document.getElementById("Sesion_Docente"); // Seccion de la Sesion del Docente
const Sesion_Administrador = document.getElementById("Sesion_Administrador"); // Seccion de la Sesion del Administrador
const SeleccionarClase_Estudiante = document.getElementById("SeleccionarClase_Estudiante"); // Funcion que se ocupa de procesar el presente en la clase seleccionada
const Clases_Estudiante = document.getElementById("Clases_Estudiante"); // Seccion de las clases del estudiante 
const Apelacion_Estudiante = document.getElementById("Apelacion_Estudiante"); // Seccion de las apelaciones del estudiante
const EnviarApelacion_Estudiante = document.getElementById("Boton_MandarApelacion_Estudiante"); // Seccion que se ocupa de las apelaciones enviadas por los estudiantes (estas se tendrian que almacenar en la base de datos para que despues el profe pueda verlas)

// Datos Almacenados en Memoria
const NM_Usuario = document.getElementById("NM_Usuario"); // Constante que almacena el Nombre del Usuario 
const CDG_Usuario = document.getElementById("CDG_Usuario"); // Constante que almacena la Contraseña del Usuario

// Funciones Adicionales
const Boton_Confirmar_Usuario = document.getElementById("Boton_Confirmar_Usuario"); // Boton que confirma la identidad del usuario
const Boton_MarcarPresente = document.getElementById("Boton_MarcarPresente"); // Boton que envia el presente a la clase asignada
const Boton_EnviarApelacion = document.getElementById("Boton_EnviarApelacion"); // Boton que envia la apelacion al docente asignado a la clase
const Boton_Volver = document.querySelectorAll(".Opcion_Volver"); // Funcion que controla el volver a la pagina anterior

const Secciones = [
    Pagina_Inicial,
    IniciarSesion_Usuario,
    Sesion_Estudiante,
    Sesion_Docente,
    Sesion_Administrador,
    Clases_Estudiante,
    Apelacion_Estudiante
];

let Historial_Secciones = [];

// Funcion que Oculta Todas las Secciones
function OcultarTodo() {
    Secciones.forEach(seccion => {
        seccion.classList.add("oculto");
    });
}

// Funcion para volver a la pagina de Inicio
function MostrarSeccion(section) {
    // Guardar la sección actual antes de cambiar
    const Seccion_Actual = Secciones.find(
        seccion => !seccion.classList.contains("oculto")
    );
    if (Seccion_Actual) {
        Historial_Secciones.push(Seccion_Actual);
    }
    OcultarTodo();
    section.classList.remove("oculto");
}

//Funcion para Mostrar la Seccion de Inicio de Sesion
MostrarInicioSesionUsuario.addEventListener("click", () => {
    if(Usuario_Actual === null){
        MostrarSeccion(IniciarSesion_Usuario);
    }
    switch(Usuario_Actual.rol) {
        case "Estudiante":
        MostrarSeccion(Sesion_Estudiante);
        break;

        case "Docente":
            MostrarSeccion(Sesion_Docente);
        break;

        case "Administrador":
        MostrarSeccion(Sesion_Administrador);
        break;

        default:
            console.log("Rol no Reconocido");
        break;
    }
});

// Funcion del Boton para confirmar el Inicio de Sesion del Usuario
Boton_Confirmar_Usuario.addEventListener("click", () => {
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

    Usuario_Actual = Identificar_US;

    if (Identificar_US.rol === "Estudiante") {
        MostrarSeccion(Sesion_Estudiante);
        MostrarBienvenidaEstudiante(Identificar_US);
    }

    if(Identificar_US.rol === "Docente"){
        MostrarSeccion(Sesion_Docente);
        MostrarBienvenidaDocente(Identificar_US);
    }

    if(Identificar_US.rol === "Administrador"){
        MostrarSeccion(Sesion_Administrador);
        MostrarBienvenidaAdministrador(Identificar_US);
    }
});

function MostrarBienvenidaEstudiante(usuario_actual){
    TextoBienvenida_Estudiante.innerText =
        `Bienvenido: ${usuario_actual.nombre} ${usuario_actual.apellido}`;
}

function MostrarBienvenidaDocente(usuario_actual){
    TextoBienvenida_Docente.innerText = 
        `Bienvenido: ${usuario_actual.nombre} ${usuario_actual.apellido}`;
}

function MostrarBienvenidaAdministrador(usuario_actual){
    TextoBienvenida_Administrador.innerText = 
        `Bienvenido: ${usuario_actual.nombre} ${usuario_actual.apellido}`;
}

function CargarClases(){
    Clases_Actuales.forEach(clase => {
        const opcion = document.createElement("option");
        opcion.value = clase.Materia;
        opcion.textContent = clase.Materia;
        SeleccionarClase_Estudiante.appendChild(opcion);
    });
}

Boton_MarcarPresente_Estudiante.addEventListener("click", () => {
    CargarClases();
    MostrarSeccion(Clases_Estudiante);
});

Boton_MarcarPresente.addEventListener("click", () => {
    const Clase_Seleccionada = SeleccionarClase_Estudiante.value;

    if (Clase_Seleccionada === "") {
        alert("Seleccione una clase");
        return;
    }

    Usuario_Actual.asistencias[Clase_Seleccionada] = "TRUE";
    Mensaje_Asistencia.innerText =`${Usuario_Actual.nombre} ${Usuario_Actual.apellido} ha sido marcado como PRESENTE en: ${Clase_Seleccionada}`;
});

Boton_MandarApelacion_Estudiante.addEventListener("click", () => {
    CargarClases();
    MostrarSeccion(Apelacion_Estudiante);
});

function VolverSeccion() {
    if (Historial_Secciones.length === 0) {
        return;
    }
    const Seccion_Anterior = Historial_Secciones.pop();
    OcultarTodo();
    Seccion_Anterior.classList.remove("oculto");
}

// Devuelve al Usuario a la Parte Anterior de la Pagina
Boton_Volver.forEach(boton => {
    boton.addEventListener("click", () => {
        VolverSeccion();
    });
});