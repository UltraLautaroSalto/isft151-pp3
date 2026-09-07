let Cuentas_Registradas = [
    {nombre: "Jorge", apellido: "Torres", edad: "16", genero: "Masculino", codigo_de_ingreso: "1234", rol: "Estudiante", Asistencia: "FALSE"},
    {nombre: "Maria", apellido: "Gutierrez", edad: "15", genero: "Femenino", codigo_de_ingreso: "4321", rol: "Estudiante", Asistencia: "FALSE"},
    {nombre: "Alex", apellido: "Santos", edad: "17", genero: "Sin Identificar", codigo_de_ingreso: "9999", rol: "Estudiante", Asistencia: "FALSE"},

    {nombre: "Lance", apellido: "Vanze", edad:"34", genero: "Masculino", codigo_de_ingreso: "VanceLastDance9876", rol: "Docente"},
    {nombre: "Denise", apellido: "Robinson", edad:"45", genero: "Femenino", codigo_de_ingreso: "CJMYLOVE6789", rol: "Docente"},

    {nombre: "Ralph", apellido: "Philips", edad:"53", genero: "Masculino", codigo_de_ingreso: "AM128894", rol: "Administrador"}
];

const Cuerpo_Principal = document.getElementById("Cuerpo_Principal"); //Usar esto despues
const Pagina_Inicial = document.getElementById("PaginaInicial"); // La primera pagina que se encuentra el usuario al entrar al proyecto

const MostrarInicioSesionUsuario = document.getElementById("Boton_Iniciar_Sesion_Usuario") // Funcion para controlar la visibilidad de "IniciarSesion_Usuario"
const TextoBienvenida_Estudiante = document.getElementById("MensajeBienvenida_Estudiante");

const IniciarSesion_Usuario = document.getElementById("IniciarSesion") // Seccion donde ocurre el Inicio de Sesion del Usuario
const Sesion_Estudiante = document.getElementById("Sesion_Estudiante")

const NM_Usuario = document.getElementById("NM_Usuario"); // Constante que almacena el Nombre del Usuario
const CDG_Usuario = document.getElementById("CDG_Usuario"); // Constante que almacena la Contraseña del Usuario

const Boton_Confirmar_Usuario = document.getElementById("Boton_Confirmar_Usuario"); // Boton que confirma la identidad del usuario

const Boton_Volver = document.querySelectorAll(".Opcion_Volver"); // Funcion que controla el volver a la pagina anterior

const Secciones = [
    Pagina_Inicial,
    IniciarSesion_Usuario,
    Sesion_Estudiante
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
    MostrarSeccion(IniciarSesion_Usuario);
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

    if (Identificar_US.rol === "Estudiante") {
        MostrarSeccion(Sesion_Estudiante);
        MostrarBienvenidaEstudiante(Identificar_US);
    }

    if(Identificar_US.rol === "Docente"){
        console.log("Tipo de Usuario Docente");
    }

    if(Identificar_US.rol === "Administrador"){
        console.log("Tipo de Usuario Administrador");
    }
});

function MostrarBienvenidaEstudiante(usuario_actual){
    TextoBienvenida_Estudiante.innerText =
        `Bienvenido: ${usuario_actual.nombre} ${usuario_actual.apellido}
            Rol: ${usuario_actual.rol}`;
}

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