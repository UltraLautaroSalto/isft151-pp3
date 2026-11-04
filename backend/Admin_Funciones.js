const TextoBienvenida_Administrador = document.getElementById("MensajeBienvenida_Administrador");

import {Sesion_Actual, Cuentas_Registradas, Clases_Actuales} from "./base_de_datos.js";
import {CargarDocentes} from './cargadores.js'

function MostrarBienvenidaAdministrador(){
    TextoBienvenida_Administrador.innerText = 
        `Bienvenido: ${Sesion_Actual.Usuario_Actual.nombre} ${Sesion_Actual.Usuario_Actual.apellido}`;
}

function RegistrarDocente_Admin(){
    const Rdocente_nombre = AñadirDocente_Nombre.value;
    const Rdocente_apellido = AñadirDocente_Apellido.value;
    const Rdocente_edad = AñadirDocente_Edad.value;
    const Rdocente_genero = AñadirDocente_Genero.value;
    const Rdocente_Email = AñadirDocente_Email.value;
    const Rdocente_Codigo = AñadirDocente_Codigo.value;
    const Rdocente_Rol = "Docente";

    const UltimoID = Cuentas_Registradas.at(-1);

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
};

function AsignandoDocente_Admin(){
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
};

function DocenteModificar_Admin(){
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
};

function EliminandoDocente_Admin(){
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
};

function AgregandoClase_Admin(){
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
};

function ModificandoClase_Admin(){
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
}

function RemoviendoClase_Admin(){
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
};

export {MostrarBienvenidaAdministrador, RegistrarDocente_Admin, AsignandoDocente_Admin, DocenteModificar_Admin, EliminandoDocente_Admin, 
    AgregandoClase_Admin, ModificandoClase_Admin, RemoviendoClase_Admin}