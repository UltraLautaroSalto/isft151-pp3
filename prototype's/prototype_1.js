let Estudiantes_Registrados = [
    {nombre: "Jorge", apellido: "Torres", edad: "16", genero: "Masculino", ID_Estudiantil: "1234", Asistencia: "FALSE"},
    {nombre: "Maria", apellido: "Gutierrez", edad: "15", genero: "Femenino", ID_Estudiantil: "4321", Asistencia: "FALSE"},
    {nombre: "Alex", apellido: "Santos", edad: "17", genero: "Sin Identificar", ID_Estudiantil: "9999", Asistencia: "FALSE"}
];

let Docentes_Registrados = [
    {nombre: "Lance", apellido: "Vanze", edad:"34", genero: "Masculino", codigo_de_ingreso: "VanceLastDance9876"},
    {nombre: "Denise", apellido: "Robinson", edad:"45", genero: "Femenino", codigo_de_ingreso: "CJMYLOVE6789"}
];

const Cuerpo_Principal = document.getElementById("Cuerpo_Principal"); //Usar esto despues
const Pagina_Inicial = document.getElementById("PaginaInicial"); // La primera pagina que se encuentra el usuario al entrar al proyecto

const MostrarInicioSecionEstudiante = document.getElementById("Boton_Ingreso_Estudiante_1"); //Funcion que controla la visibilidad de "IniciodeSesion_Estudiante"
const MostrarInicioSecionDocente = document.getElementById("Boton_Ingreso_Docente_1"); //Funcion que controla la visibilidad de "InicioSecion_Docente"

const IniciodeSesion_Estudiante = document.getElementById("IniciodeSesion_Estudiante_2"); // Muestra la Seccion de Inicio de Sesion del Estudiante
const IniciodeSesion_Docente = document.getElementById("IniciodeSesion_Docente_2"); // Muestra la seccion de Inicio de Sesion del Docente

const ID_Estudiantil = document.getElementById("ID_Estudiantil"); // Constante que almacena el ID del Estudiante ingresado

const NOMBRE_Docente = document.getElementById("Nombre_Docente"); // Constante que almacena el Nombre del Docente
const CODIGO_Docente = document.getElementById("Codigo_Docente"); // Constante que almacena la Contraseña del Docente

const Boton_Alumno = document.getElementById("IniciarSesion_Alumno"); // Boton que confirma el ID del Estudiante y le da la Bienvenida en caso de aprobarlo
const Boton_Docente = document.getElementById("IniciarSesion_Docente"); // Boton que permite al docente de turno iniciar secion siempre y cuando su contraseña y nombre concuerden

function OcultarTodo() {
    Pagina_Inicial.classList.add("oculto");
    MostrarInicioSecionEstudiante.classList.add("oculto");
    MostrarInicioSecionDocente.classList.add("oculto");
}

// De momento esto no cumple ninguna funcion
/* function MostrarSeccion(section){
    OcultarTodo();
    section.classList.remove("oculto");
} */

// Funcion para Mostrar el Inicio de Sesion del Estudiante
MostrarInicioSecionEstudiante.addEventListener("click", () => {
    OcultarTodo();
    IniciodeSesion_Estudiante.classList.remove("oculto");
});

MostrarInicioSecionDocente.addEventListener("click", () => {
    OcultarTodo();
    IniciodeSesion_Docente.classList.remove("oculto");
});

// Funcion del Boton para confirmar el Inicio de Sesion del Usuario Estudiante
Boton_Alumno.addEventListener("click", () => {
    const ID_alm = ID_Estudiantil.value;
    const ALM_nombre = Nombre_Estudiantil.value;

    if(ID_alm.trim() === ""){
        alert("El ID Ingresado no es valido, porfavor vuelva a intentarlo");
        return;
    }

    const Identificar_alm = Estudiantes_Registrados.find(p => p.ID_Estudiantil === ALM_nombre,p => p.ID_Estudiantil === ID_alm);

    if(!Identificar_alm){
        alert("ERROR: La contraseña o Nombre Ingresados Ingresada es incorrecta, vuelva a intentarlo");
        return;
    }

    Identificar_alm.Asistencia = "TRUE";

    MensajeIdentidadConfirmadaALM.innerText = `USUARIO IDENTIFICADO\n Bienvenido: ${Identificar_alm.nombre} ${Identificar_alm.apellido}`; // Mensaje que sale cuando la identidad del usuario es confirmada
    MensajeInformacionAdicionalALM.innerText = `Edad: ${Identificar_alm.edad} \nGenero: ${Identificar_alm.genero} \nID_Estudiantil: ${Identificar_alm.ID_Estudiantil} \nEstado de Asistencia: ${Identificar_alm.Asistencia}`; // Informacion adicional sobre el alumno ingresado
});

// Funcion del Boton para confirmar el Inicio de Sesion del Usuario Docente
Boton_Docente.addEventListener("click", () => {
    const nom_docente = NOMBRE_Docente.value; // parece que aqui hay un problema por el cual no puede recibir valores de tipo texto, resolverlo mañana
    console.log(nom_docente);
    const cod_docente = CODIGO_Docente.value;
    console.log(cod_docente);

    if(nom_docente.trim() === ""){
        alert("Porfavor ingrese el nombre del docente");
        return;
    }

    if(cod_docente.trim() === ""){
        alert("Porfavor ingrese una contraseña");
        return;
    }

    const Identificar_doc = Docentes_Registrados.find(p => p.nombre === nom_docente, p => p.codigo_de_ingreso === cod_docente);

    if(!Identificar_doc){
        alert("ERROR: La contraseña o Nombre Ingresados Ingresada es incorrecta, vuelva a intentarlo");
    }

    MensajeIdentidadConfirmadaDOC.innerText = `USUARIO IDENTIFICADO\n Bienvenido: ${Identificar_doc.nombre} ${Identificar_doc.apellido}`;
});