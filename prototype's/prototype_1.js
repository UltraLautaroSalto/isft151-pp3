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
    {Materia: "Algoritmo y Estructura de Datos 1", Año: "1°", Docente_Asignado: "Lance", Estudiantes: ["Jorge","Maria"]},
    {Materia: "Practicar Profecionalizantes 3", Año: "3°", Docente_Asignado: "Denise", Estudiantes: ["Maria", "Alex"]},
    {Materia: "Matematicas 2", Año: "2°", Docente_Asignado: "Niko", Estudiantes: ["Alex", "Jorge"]}
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
const Clases_Estudiante = document.getElementById("Clases_EstudiantePresente"); // Seccion de las clases del estudiante 
const Apelacion_Estudiante = document.getElementById("Apelacion_Estudiante"); // Seccion de las apelaciones del estudiante
const EnviarApelacion_Estudiante = document.getElementById("Boton_MandarApelacion_Estudiante"); // Seccion que se ocupa de las apelaciones enviadas por los estudiantes (estas se tendrian que almacenar en la base de datos para que despues el profe pueda verlas)
const AdministrarEstudiantes_Docente = document.getElementById("AdministrarEstudiantes_Docente"); // Seccion de la administracion de estudiantes del docente
const TablaEstudiantes_Docente = document.getElementById("ListaEstudiantes_Docente"); 
const InformacionClase_Docente = document.getElementById("InformacionClase_Docente");
const Boton_GuardarCambios_Estudiante = document.getElementById("Boton_GuardarCambios_Estudiante");
const Boton_EliminarEstudiante_Clase = document.getElementById("Boton_EliminarEstudiante_Clase");
const VerApelaciones_Docente = document.getElementById("VerApelaciones_Docente");

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
    VerApelaciones_Docente
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