let Cuentas_Registradas = [
    {id: 1, nombre: "Jorge", apellido: "Torres", edad: "16", genero: "Masculino", codigo_de_ingreso: "1234", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},
    {id: 2, nombre: "Maria", apellido: "Gutierrez", edad: "15", genero: "Femenino", codigo_de_ingreso: "4321", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},
    {id: 3, nombre: "Alex", apellido: "Santos", edad: "17", genero: "Sin Identificar", codigo_de_ingreso: "9999", rol: "Estudiante", 
        asistencias:{"Algoritmo y Estructura de Datos 1": "FALSE", "Practicar Profecionalizantes 3": "FALSE", "Matematicas 2": "FALSE"}},

    {id: 4,nombre: "Lance", apellido: "Vanze", edad:"34", genero: "Masculino", codigo_de_ingreso: "VanceLastDance9876", rol: "Docente"},
    {id: 5,nombre: "Denise", apellido: "Robinson", edad:"45", genero: "Femenino", codigo_de_ingreso: "CJMYLOVE6789", rol: "Docente"},
    {id: 6,nombre: "Niko", apellido: "Bellic", edad:"54", genero:"Masculino", codigo_de_ingreso: "STIWTDFLTITVWLF", rol: "Docente"},

    {id: 7,nombre: "Ralph", apellido: "Philips", edad:"53", genero: "Masculino", codigo_de_ingreso: "AM128894", rol: "Administrador"}
];

let Clases_Actuales = [
    {id: 1, Materia: "Algoritmo y Estructura de Datos 1", Año: "1°", Docente_Asignado: "Lance", Estudiantes: ["Jorge","Maria"]},
    {id: 2, Materia: "Practicar Profecionalizantes 3", Año: "3°", Docente_Asignado: "Denise", Estudiantes: ["Maria", "Alex"]},
    {id: 3, Materia: "Matematicas 2", Año: "2°", Docente_Asignado: "Niko", Estudiantes: ["Alex", "Jorge"]} 
];

let Usuario_Actual = null;
let Estudiante_Modificando = null;
let Apelaciones_Pendientes = [{id: 1, nombre: "Pepito",apellido: "Alvarez",Clase_Seleccionada: "Algoritmo y Estructura de Datos 1",Razon_Apelacion: "Prueba"}];

const Pagina_Inicial = document.getElementById("PaginaInicial"); // La Pagina Principal

// Botones Para Mostrar una Seccion especifica
const MostrarInicioSesionUsuario = document.getElementById("Boton_Iniciar_Sesion_Usuario"); // Funcion para controlar la visibilidad de "IniciarSesion_Usuario"
const MarcarPresente_Estudiante = document.getElementById("Boton_MarcarPresente_Estudiante"); // Seccion que se ocupa de mostrar la tabla de clases y le permite al usuario marcar presente en X Clase
const Boton_MarcarPresente_Estudiante = document.getElementById("Boton_MarcarPresente_Estudiante"); // Boton que controla la visibilida de la seccion "Clases_Estudiante"
const Boton_MandarApelacion_Estudiante = document.getElementById("Boton_MandarApelacion_Estudiante"); // Boton que controla la visibilidad de la seccion "Apelacion_Estudiante"
const Boton_AdministrarEstudiantes = document.getElementById("Boton_AdministrarEstudiantes"); // Boton que controla la visibilidad de la seccion "AdministrarEstudiantes_Docente"
const Boton_RevisarApelaciones = document.getElementById("Boton_RevisarApelaciones");
const SeleccionarOpcion_SesionActiva = document.getElementById("SeleccionarOpcion_SesionActiva");

const Boton_AdministrarDocentes = document.getElementById("Boton_AdministrarDocentes");
const Boton_AdministrarClases = document.getElementById("Boton_AdministrarClases");

const Opcion_AñadirDocente = document.getElementById("Opcion_AñadirDocente");
const Opcion_AsignarDocente = document.getElementById("Opcion_AsignarDocente");
const Opcion_ModificarDocente = document.getElementById("Opcion_ModificarDocente");
const Opcion_EliminarDocente = document.getElementById("Opcion_EliminarDocente");

const Opcion_AñadirClase = document.getElementById("Opcion_AñadirClase");
const Opcion_ModificarClase = document.getElementById("Opcion_ModificarClase");
const Opcion_RemoverClase = document.getElementById("Opcion_RemoverClase");

// Mensajes
const TextoNombreCuenta_Actual = document.getElementById("NombreCuenta_Actual"); // Muestra el nombre de la cuenta actual
const TextoBienvenida_Estudiante = document.getElementById("MensajeBienvenida_Estudiante"); // Funcion que muestra el texto de Bienvenida del Estudiante
const TextoBienvenida_Docente = document.getElementById("MensajeBienvenida_Docente"); // Funcion que muestra el texto de Bienvenida del Docente
const TextoBienvenida_Administrador = document.getElementById("MensajeBienvenida_Administrador"); // Funcion que muestra el texto de Bienvenida del Administrador
const Mensaje_ModificarEstudiante = document.getElementById("Mensaje_ModificarEstudiante");

// Funciones Principales
const IniciarSesion_Usuario = document.getElementById("IniciarSesion"); // Seccion donde ocurre el Inicio de Sesion del Usuario

const Sesion_Estudiante = document.getElementById("Sesion_Estudiante"); // Seccion de la Sesion del Estudiante
const Sesion_Docente = document.getElementById("Sesion_Docente"); // Seccion de la Sesion del Docente
const Sesion_Administrador = document.getElementById("Sesion_Administrador"); // Seccion de la Sesion del Administrador

const SeleccionarClase_EstudiantePresente = document.getElementById("SeleccionarClase_EstudiantePresente"); // Funcion que se ocupa de procesar el presente en la clase seleccionada
const SeleccionarClase_EstudianteApelacion = document.getElementById("SeleccionarClase_EstudianteApelacion"); // Funcion que se ocupa de asignar la apelacion a la clase seleccionada

const SeleccionarDocente_Clase = document.getElementById("SeleccionarDocente_Clase");

const SeleccionarNuevoDocente_Clase = document.getElementById("SeleccionarNuevoDocente_Clase");

const Clases_Estudiante = document.getElementById("Clases_EstudiantePresente"); // Seccion de las clases del estudiante 
const Apelacion_Estudiante = document.getElementById("Apelacion_Estudiante"); // Seccion de las apelaciones del estudiante
const EnviarApelacion_Estudiante = document.getElementById("Boton_MandarApelacion_Estudiante"); // Seccion que se ocupa de las apelaciones enviadas por los estudiantes (estas se tendrian que almacenar en la base de datos para que despues el profe pueda verlas)
const AdministrarEstudiantes_Docente = document.getElementById("AdministrarEstudiantes_Docente"); // Seccion de la administracion de estudiantes del docente
const TablaEstudiantes_Docente = document.getElementById("ListaEstudiantes_Docente"); 
const InformacionClase_Docente = document.getElementById("InformacionClase_Docente");
const Boton_GuardarCambios_Estudiante = document.getElementById("Boton_GuardarCambios_Estudiante");
const Boton_EliminarEstudiante_Clase = document.getElementById("Boton_EliminarEstudiante_Clase");
const VerApelaciones_Docente = document.getElementById("VerApelaciones_Docente");

const AdministrarDocentes = document.getElementById("AdministrarDocentes");
const AdministrarClases = document.getElementById("AdministrarClases");
const AñadirDocente_Admin = document.getElementById("AñadirDocente_Admin");
const RegistrarDocente_Admin = document.getElementById("RegistrarDocente_Admin");
const AsignarDocente_Admin = document.getElementById("AsignarDocente_Admin");
const AsignandoDocente_Admin = document.getElementById("AsignandoDocente_Admin");
const ModificarDocente_Admin = document.getElementById("ModificarDocente_Admin");
const DocenteModificar_Admin = document.getElementById("DocenteModificar_Admin");
const EliminarDocente_Admin = document.getElementById("EliminarDocente_Admin");
const EliminandoDocente_Admin = document.getElementById("EliminandoDocente_Admin");
const ModificarClase_Admin = document.getElementById("ModificarClase_Admin");
const ModificandoClase_Admin = document.getElementById("ModificandoClase_Admin");
const AgregarClase_Admin = document.getElementById("AgregarClase_Admin");
const AgregandoClase_Admin = document.getElementById("AgregandoClase_Admin");
const RemoverClase_Admin = document.getElementById("RemoverClase_Admin");
const RemoviendoClase_Admin = document.getElementById("RemoviendoClase_Admin");

// Datos Almacenados en Memoria
const NM_Usuario = document.getElementById("NM_Usuario"); // Constante que almacena el Nombre del Usuario 
const CDG_Usuario = document.getElementById("CDG_Usuario"); // Constante que almacena la Contraseña del Usuario
const Rzn_Apelacion = document.getElementById("Razon_Apelacion"); // Constante que almacena la razon de la apelacion del estudiante

const ModificarEstudiante_Docente = document.getElementById("ModificarEstudiante_Docente");
const Modificar_Nombre = document.getElementById("Modificar_Nombre");
const Modificar_Apellido = document.getElementById("Modificar_Apellido");
const Modificar_Edad = document.getElementById("Modificar_Edad");
const Modificar_Asistencia = document.getElementById("Modificar_Asistencia");

const OpcionSesion_Activa = document.getElementById("OpcionesSesion_Activa");

const AñadirDocente_Nombre = document.getElementById("AñadirDocente_Nombre");
const AñadirDocente_Apellido = document.getElementById("AñadirDocente_Apellido");
const AñadirDocente_Edad = document.getElementById("AñadirDocente_Edad");
const AñadirDocente_Genero = document.getElementById("AñadirDocente_Genero");
const AñadirDocente_Codigo = document.getElementById("AñadirDocente_Codigo");
const AñadirDocente_Email = document.getElementById("AñadirDocente_Email");

const AsignarDocente_ID = document.getElementById("AsignarDocente_ID");
const SeleccionarClase_Docente = document.getElementById("SeleccionarClase_Docente");

const EncontrarDocente_ID = document.getElementById("EncontrarDocente_ID");
const Nuevo_DocenteID = document.getElementById("Nuevo_DocenteID");
const Nuevo_DocenteNombre = document.getElementById("Nuevo_DocenteNombre");
const Nuevo_DocenteApellido = document.getElementById("Nuevo_DocenteApellido");
const Nuevo_DocenteEdad = document.getElementById("Nuevo_DocenteEdad");
const Nuevo_DocenteGenero = document.getElementById("Nuevo_DocenteGenero");
const Nuevo_DocenteCodigo = document.getElementById("Nuevo_DocenteCodigo");
const Nuevo_DocenteEmail = document.getElementById("Nuevo_DocenteEmail");

const IDdocente_Eliminar = document.getElementById("IDdocente_Eliminar");

const AgregarNombre_Clase = document.getElementById("AgregarNombre_Clase");
const AgregarCiclo_Clase = document.getElementById("AgregarCiclo_Clase");

const ID_ClaseBuscar = document.getElementById("ID_ClaseBuscar");
const NuevoID_Clase = document.getElementById("NuevoID_Clase");
const NuevaMateria_Clase = document.getElementById("NuevaMateria_Clase");
const NuevoCiclo_Clase = document.getElementById("NuevoCiclo_Clase");

const IDClase_Remover= document.getElementById("IDClase_Remover");

// Funciones Adicionales
const Boton_Confirmar_Usuario = document.getElementById("Boton_Confirmar_Usuario"); // Boton que confirma la identidad del usuario
const Boton_MarcarPresente = document.getElementById("Boton_MarcarPresente"); // Boton que envia el presente a la clase asignada
const Boton_EnviarApelacion = document.getElementById("Boton_EnviarApelacion"); // Boton que envia la apelacion al docente asignado a la clase
const Boton_Volver = document.querySelectorAll(".Opcion_Volver"); // Funcion que controla el volver a la pagina anterior
const Boton_VolverInicio = document.getElementById("Opcion_VolverInicio"); // Funcion que regera al usuario a la pagina principal 

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
        TextoNombreCuenta_Actual.textContent = `Sesion Actual: ${Usuario_Actual.nombre} ${Usuario_Actual.apellido}`;
        MostrarSeccion(Sesion_Estudiante);
        MostrarBienvenidaEstudiante(Identificar_US);
    }

    if(Identificar_US.rol === "Docente"){
        TextoNombreCuenta_Actual.textContent = `Sesion Actual: ${Usuario_Actual.nombre} ${Usuario_Actual.apellido}`;
        MostrarSeccion(Sesion_Docente);
        MostrarBienvenidaDocente(Identificar_US);
    }

    if(Identificar_US.rol === "Administrador"){
        TextoNombreCuenta_Actual.textContent = `Sesion Actual: ${Usuario_Actual.nombre} ${Usuario_Actual.apellido}`;
        MostrarSeccion(Sesion_Administrador);
        MostrarBienvenidaAdministrador(Identificar_US);
    }
});

SeleccionarOpcion_SesionActiva.addEventListener("click", function() {
    const Opcion_Elegida = OpcionSesion_Activa.value;

    if(Usuario_Actual == null){
        alert("No hay una cuenta iniciada en este momento");
        return;
    }else{
        switch(Opcion_Elegida){
            case "":
                alert("Porfavor seleccione una de las demás opciones");
            break;
            case "OpcionesSesion_primera":
                console.log("El usuario quiere cambiar su contraseña");
                const Codigo_Ingresado = prompt("Ingrese su nueva contraseña");

                if(Codigo_Ingresado === null || Codigo_Ingresado === ""){
                    alert("La contraseña ingresada no es valida o no se ingreso, porfavor vuelva a intentarlo");
                    return;
                }

                const Confirmacion_CambiarCodigo = confirm("¿Esta seguro que desea cambiar la contraseña?");

                if(!Confirmacion_CambiarCodigo){
                    alert("Se cancelo el cambio de contraseña");
                    break;
                }

                Usuario_Actual.codigo_de_ingreso = Codigo_Ingresado;
                alert("Tu contraseña a sido cambiada correctamente");
            break;
            case "OpcionesSesion_segunda":
                const Confirmacion_CerrarCuenta = confirm("¿Esta seguro de que desea cerrar su sesion?");

                if(!Confirmacion_CerrarCuenta){
                    alert("Se cancelo el cerrado de sesion");
                    break;
                }

                Usuario_Actual = null;
                TextoNombreCuenta_Actual.textContent = ``;
                MostrarSeccion(Pagina_Inicial);
            break;
            case "OpcionesSesion_tercera":
                console.log("El Usuario quiere eliminar su cuenta");
                const EliminarCuenta_Codigo = prompt("Ingrese su contraseña")

                if(EliminarCuenta_Codigo === null || EliminarCuenta_Codigo === ""){
                    alert("Eliminiacion Cancelada");
                    break;
                }

                if(EliminarCuenta_Codigo !== Usuario_Actual.codigo_de_ingreso){
                    alert("La contraseña ingresada es incorrecta");
                    break;
                }
                
                const Confirmacion_EliminarCuenta = confirm("Esta seguro que desea eliminar su cuenta? Esta accion es permanente");
                
                if(!Confirmacion_EliminarCuenta){
                    alert("Eliminacion Cancelada");
                    break;
                }

                const IndiceCuenta = Cuentas_Registradas.findIndex(cuenta => cuenta === Usuario_Actual);

                if(IndiceCuenta !== -1){
                    Cuentas_Registradas.splice(IndiceCuenta, 1);
                    Usuario_Actual = null;
                    TextoNombreCuenta_Actual.textContent = ``;

                    alert("Tu cuenta fue Eliminada exitosamente de la base de datos");
                    MostrarSeccion(Pagina_Inicial);
                } else {
                    alert("no se a encontrado la cuenta que desea eliminar.");
                }
            
            break;
            default:
                alert("Opcion seleccionada invalida, porfavor vuela a intentarlo");
            break;
        }
}
});

/////////////////////////////////////////////////////////////////////FUNCIONES ALUMNO//////////////////////////////////////////////////////////
function MostrarBienvenidaEstudiante(usuario_actual){
    TextoBienvenida_Estudiante.innerText =
        `Bienvenido: ${usuario_actual.nombre} ${usuario_actual.apellido}`;
}

function CargarClases(select){
    Clases_Actuales.forEach(clase => {
        const opcion = document.createElement("option");
        opcion.value = clase.Materia;
        opcion.textContent = clase.Materia;
        select.appendChild(opcion);
    });
}

Boton_MarcarPresente_Estudiante.addEventListener("click", () => {
    CargarClases(SeleccionarClase_EstudiantePresente);
    MostrarSeccion(Clases_Estudiante);
});

Boton_MarcarPresente.addEventListener("click", () => {
    const Clase_Seleccionada = SeleccionarClase_EstudiantePresente.value;

    if (Clase_Seleccionada === "") {
        alert("Seleccione una clase");
        return;
    }

    Usuario_Actual.asistencias[Clase_Seleccionada] = "TRUE";
    Mensaje_Asistencia.innerText =`${Usuario_Actual.nombre} ${Usuario_Actual.apellido} ha sido marcado como PRESENTE en: ${Clase_Seleccionada}`;
});

Boton_MandarApelacion_Estudiante.addEventListener("click", () => {
    CargarClases(SeleccionarClase_EstudianteApelacion);
    MostrarSeccion(Apelacion_Estudiante);
});

Boton_EnviarApelacion.addEventListener("click", () => {
    const Clase_Seleccionada = SeleccionarClase_EstudianteApelacion.value;
    const MensajeApelacion = Rzn_Apelacion.value;

    if (Clase_Seleccionada === ""){
        alert("Seleccione una clase");
        return;
    }

    // Obtener el ID de la última apelación.
    const UltimaApelacion = Apelaciones_Pendientes.at(-1);

    // Generar el siguiente ID.
    const NuevoID = UltimaApelacion ? UltimaApelacion.id + 1 : 1;

    // Crear la nueva apelación.
    const NuevaApelacion = {
        id: NuevoID,
        nombre: Usuario_Actual.nombre,
        apellido: Usuario_Actual.apellido,
        clase: Clase_Seleccionada,
        razon: MensajeApelacion
    };

    // Agregarla al array.
    Apelaciones_Pendientes.push(NuevaApelacion);
    Mensaje_Apelacion.innerText = `Se mandó correctamente la apelación a la clase ${Clase_Seleccionada}`;
    console.log(Apelaciones_Pendientes);
});
/////////////////////////////////////////////////////////////////////FUNCIONES ALUMNO//////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////FUNCIONES DOCENTE//////////////////////////////////////////////////////////
function MostrarBienvenidaDocente(usuario_actual){
    TextoBienvenida_Docente.innerText = 
        `Bienvenido: ${usuario_actual.nombre} ${usuario_actual.apellido}`;
}

Boton_AdministrarEstudiantes.addEventListener("click", () => {
    MostrarSeccion(AdministrarEstudiantes_Docente);
    CargarEstudiantesDocente();
});

function ObtenerClaseDocente() {
    return Clases_Actuales.find(
        clase => clase.Docente_Asignado === Usuario_Actual.nombre
    );
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
        `Clase: ${Clase_Docente.Materia} Docente: ${Usuario_Actual.nombre}`;

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

Boton_RevisarApelaciones.addEventListener("click", () => {
    MostrarSeccion(VerApelaciones_Docente);
});

VerApelaciones_Docente.addEventListener("click", () =>{
    Mostrar_Apelaciones();
});

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
};

function Resolver_Apelacion(ID_Apelacion, Aprobada) {
    const Indice = Apelaciones_Pendientes.findIndex(
        Apelacion => Apelacion.id === ID_Apelacion
    );

    // Comprobamos que exista la apelación.
    if (Indice === -1) {
        alert("No se encontró la apelación.");
        return;
    }

    const Apelacion = Apelaciones_Pendientes[Indice];

    if (Aprobada) {
        alert("Se aprobó la apelación de " + Apelacion.nombre, " " + Apelacion.apellido);
        // Aquí iría la lógica específica de aprobación.
    } else {
        alert("Se rechazó la apelación de " + Apelacion.nombre, " " + Apelacion.apellido);
        // Aquí iría la lógica específica de rechazo.
    }

    // Quitamos la apelación de la lista de pendientes.
    Apelaciones_Pendientes.splice(Indice, 1);

    // Actualizamos lo que se muestra en pantalla.
    Mostrar_Apelaciones();
}
/////////////////////////////////////////////////////////////////////FUNCIONES DOCENTE//////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////FUNCIONES ADMINISTRADOR//////////////////////////////////////////////////////////
function MostrarBienvenidaAdministrador(usuario_actual){
    TextoBienvenida_Administrador.innerText = 
        `Bienvenido: ${usuario_actual.nombre} ${usuario_actual.apellido}`;
}

Boton_AdministrarDocentes.addEventListener("click", () => {
    MostrarSeccion(AdministrarDocentes);
});

Boton_AdministrarClases.addEventListener("click", () => {
    MostrarSeccion(AdministrarClases);
});

function ObtenerDocentes() {
    return Cuentas_Registradas.find(
        docente => docente.Docente_Asignado === Usuario_Actual.rol
    );
}

Opcion_AñadirDocente.addEventListener("click", () => {
    MostrarSeccion(AñadirDocente_Admin);
});

Opcion_AsignarDocente.addEventListener("click", () => {
    CargarClases(SeleccionarClase_Docente);
    MostrarSeccion(AsignarDocente_Admin);
})

Opcion_ModificarDocente.addEventListener("click", () => {
    MostrarSeccion(ModificarDocente_Admin);
});

Opcion_EliminarDocente.addEventListener("click", () => {
    MostrarSeccion(EliminarDocente_Admin);
});

RegistrarDocente_Admin.addEventListener("click", () => {
    const Rdocente_nombre = AñadirDocente_Nombre.value;
    const Rdocente_apellido = AñadirDocente_Apellido.value;
    const Rdocente_edad = AñadirDocente_Edad.value;
    const Rdocente_genero = AñadirDocente_Genero.value;
    const Rdocente_Email = AñadirDocente_Email.value;
    const Rdocente_Codigo = AñadirDocente_Codigo.value;
    const Rdocente_Rol = "Docente";

    // Obtener el ID de la última apelación.
    const UltimoID = Cuentas_Registradas.at(-1);

    // Generar el siguiente ID.
    const NuevoID = UltimoID ? UltimoID.id + 1 : 1;

    const Nueva_InfoAñadirDocente = {
        id: NuevoID,
        nombre: Rdocente_nombre,
        apellido: Rdocente_apellido,
        edad: Rdocente_edad,
        genero: Rdocente_genero,
        codigo_de_ingreso: Rdocente_Codigo,
        rol: Rdocente_Rol,
        email: Rdocente_Email
    }

    Cuentas_Registradas.push(Nueva_InfoAñadirDocente);
    ConfirmacionDocenteAñadido.innerText = `El Docente ${Rdocente_nombre} ${Rdocente_apellido} a sido agregado a la base de datos`
    console.log(Nueva_InfoAñadirDocente);
});

AsignandoDocente_Admin.addEventListener("click", () => {
    const Clase_Seleccionada = SeleccionarClase_Docente.value;
    const DocenteSeleccionado = Number(AsignarDocente_ID.value);

    if (Clase_Seleccionada === "") {
        alert("Seleccione una clase");
        return;
    }

    if(DocenteSeleccionado === null) {
        alert("Ingrese un ID valido");
        return;
    }

    const BuscarDocente = Cuentas_Registradas.find(p => p.id === DocenteSeleccionado && p.rol === "Docente");
    const BuscarMateria = Clases_Actuales.find(p => p.Materia === Clase_Seleccionada);

    if(!BuscarDocente){
        alert("No se encontro un docente con ese ID");
        return;
    }

    if(!BuscarMateria){
        alert("No se encontro la clase seleccionada");
        return;
    }

    BuscarMateria.Docente_Asignado = `${BuscarDocente.nombre} ${BuscarDocente.apellido}`;

    alert("El Docente fue asignado correctamente");

    //console.log(BuscarMateria);
    //console.log(Clases_Actuales.Docente_Asignado);
});

DocenteModificar_Admin.addEventListener("click", () => {
    const Docente_Encontrado = Number(EncontrarDocente_ID.value);

    if(Number.isNaN(Docente_Encontrado)){
        alert("Porfavor Ingrese un ID");
        return;
    }

    const DocenteID_Nuevo = Number(Nuevo_DocenteID.value);
    const DocenteNombre_Nuevo = Nuevo_DocenteNombre.value;
    const DocenteApellido_Nuevo = Nuevo_DocenteApellido.value;
    const DocenteEdad_Nuevo = Number(Nuevo_DocenteEdad.value);
    const DocenteGenero_Nuevo = Nuevo_DocenteGenero.value;
    const DocenteCodigo_Nuevo = Nuevo_DocenteCodigo.value;
    const DocenteEmail_Nuevo = Nuevo_DocenteEmail.value;

    const Nuevo_ModificarInfoDocente = {
        id: DocenteID_Nuevo,
        nombre: DocenteNombre_Nuevo,
        apellido: DocenteApellido_Nuevo,
        edad: DocenteEdad_Nuevo,
        genero: DocenteGenero_Nuevo,
        codigo_de_ingreso: DocenteEmail_Nuevo,
        email: DocenteEmail_Nuevo
    }

    const Buscar_DocenteID = Cuentas_Registradas.find(p => p.id === Docente_Encontrado && p.rol === "Docente");

    if(!Buscar_DocenteID){
        alert("No se encontro un docente con ese ID");
        return;
    }

    Object.assign(Buscar_DocenteID, Nuevo_ModificarInfoDocente);
    alert("Docente Modificado Correctamente");
    console.log(Cuentas_Registradas);
});

EliminandoDocente_Admin.addEventListener("click", () => {
    const EliminarDocente = Number(IDdocente_Eliminar.value);
    const DocenteActual_Encontrar = Cuentas_Registradas.findIndex(Eliminardoc => Eliminardoc.id === EliminarDocente);

    if(Number.isNaN(EliminarDocente)){
        alert("Ingrese un ID valido");
        return;
    }

    if(!DocenteActual_Encontrar){
        alert("No se encontro al docente seleccionado en la base de datos");
        return;
    }

    const ConfirmacionEliminar_Docente = confirm("¿Esta seguro de que desea eliminar a este docente? Esta accion es permanente y no se puede revertir");

    if(!ConfirmacionEliminar_Docente){
        alert("Eliminacion Cancelada");
        return;
    }

    Cuentas_Registradas.splice(DocenteActual_Encontrar, 1);
    alert("El docente a sido eliminado de la base de datos correctamente");
});

Opcion_AñadirClase.addEventListener("click", () => {
    MostrarSeccion(AgregarClase_Admin);
    CargarDocentes(SeleccionarDocente_Clase);
});

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

Opcion_ModificarClase.addEventListener("click", () => {
    MostrarSeccion(ModificarClase_Admin);
    CargarDocentes(SeleccionarNuevoDocente_Clase);
});

Opcion_RemoverClase.addEventListener("click", () => {
    MostrarSeccion(RemoverClase_Admin);
});

AgregandoClase_Admin.addEventListener("click", () => {
    const AClase_Materia = AgregarNombre_Clase.value;
    const AClase_Ciclo = AgregarCiclo_Clase.value;
    const AClase_Docente = SeleccionarDocente_Clase.value;

    const UltimoID = Clases_Actuales.at(-1);
    const AClase_ID = UltimoID ? UltimoID.id + 1 : 1;

    const Nueva_Clase = {
        id: AClase_ID,
        Materia: AClase_Materia,
        Año: AClase_Ciclo + "°",
        Docente_Asignado: AClase_Docente
    };

    Clases_Actuales.push(Nueva_Clase);
    alert("Clase Registrada Exitosamente");
});

ModificandoClase_Admin.addEventListener("click", () => {
    const BuscarPor_ID = Number(ID_ClaseBuscar.value);
    const ModID_Clase = Number(NuevoID_Clase.value);
    const ModMateria_Clase = NuevaMateria_Clase.value;
    const ModCiclo_Clase = NuevoCiclo_Clase.value;
    const ModDocente_Clase = SeleccionarNuevoDocente_Clase.value;

    const ModClase_Info = {
        id: ModID_Clase,
        Materia: ModMateria_Clase,
        Año: ModCiclo_Clase + "°",
        Docente_Asignado: ModDocente_Clase
    };

    const BuscarClase_ID = Clases_Actuales.find(p => p.id === BuscarPor_ID);

    if(!BuscarClase_ID){
        alert("ERROR: No se encontro una clase con ese ID");
        return;
    }

    Object.assign(BuscarClase_ID, ModClase_Info);
    alert("Informacion de la clase actualizada correctamente");
    console.log(Clases_Actuales);
})

RemoviendoClase_Admin.addEventListener("click", () => {
    const QuitarClase_ID = Number(IDClase_Remover.value);
    const ClaseSeleccionada_Encontrar = Clases_Actuales.find(p => p.id === QuitarClase_ID);

    if(Number.isNaN(QuitarClase_ID)){
        alert("ERROR: No se a encontrado la clase del ID seleccionado o no se ingreso ningun valor, porfavor vuelva a intentarlo");
        return;
    }

    if(!ClaseSeleccionada_Encontrar){
        alert("ERROR: No se a podido encontrar una clase con el mismo ID que el ingresado, porfavor vuelva a intentarlo");
        return;
    }

    const ConfirmacionEliminar_Clase = confirm("¿Esta seguro que quiere eliminar esta clase? Esta accion es irreversible");

    if(!ConfirmacionEliminar_Clase){
        alert("Eliminacion Cancelada");
        return;
    }

    Clases_Actuales.splice(ClaseSeleccionada_Encontrar,1);
    alert("La clase a sido eliminada de la Base de datos");
    console.log(Clases_Actuales);
});

/////////////////////////////////////////////////////////////////////FUNCIONES ADMINISTRADOR//////////////////////////////////////////////////////////

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

Boton_VolverInicio.addEventListener("click", () => {
    MostrarSeccion(Pagina_Inicial);
});