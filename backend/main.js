const MS_MostrarInicioSesionUsuario = document.getElementById("Boton_Iniciar_Sesion_Usuario");
const MS_MostrarRegistro = document.getElementById("Boton_Registrarse");
const Boton_Confirmar_Registro = document.getElementById("Boton_Confirmar_Registro");

const MS_Boton_MarcarPresente_Estudiante = document.getElementById("Boton_MarcarPresente_Estudiante");
const MS_Boton_MandarApelacion_Estudiante = document.getElementById("Boton_MandarApelacion_Estudiante");
const Boton_MarcarPresente = document.getElementById("Boton_MarcarPresente");
const Boton_EnviarApelacion = document.getElementById("Boton_EnviarApelacion");

const MS_Boton_AdministrarEstudiantes = document.getElementById("Boton_AdministrarEstudiantes");
const MS_Boton_RevisarApelaciones = document.getElementById("Boton_RevisarApelaciones");
const Boton_Confirmar_Usuario = document.getElementById("Boton_Confirmar_Usuario");
const VerApelaciones_Docente = document.getElementById("VerApelaciones_Docente");

const MS_Boton_AdministrarDocentes = document.getElementById("Boton_AdministrarDocentes")
const MS_Opcion_AñadirDocente = document.getElementById("Opcion_AñadirDocente");
const MS_Opcion_AsignarDocente = document.getElementById("Opcion_AsignarDocente");
const MS_Opcion_ModificarDocente = document.getElementById("Opcion_ModificarDocente");
const MS_Opcion_EliminarDocente = document.getElementById("Opcion_EliminarDocente");
const RegistrarDocente_Admin = document.getElementById("RegistrarDocente_Admin");
const AsignandoDocente_Admin = document.getElementById("AsignandoDocente_Admin");
const DocenteModificar_Admin = document.getElementById("DocenteModificar_Admin");
const EliminandoDocente_Admin = document.getElementById("EliminandoDocente_Admin");

const MS_Boton_AdministrarClases = document.getElementById("Boton_AdministrarClases");

const MS_Opcion_AñadirClase = document.getElementById("Opcion_AñadirClase");
const MS_Opcion_ModificarClase = document.getElementById("Opcion_ModificarClase");
const MS_Opcion_RemoverClase = document.getElementById("Opcion_RemoverClase");
const AgregandoClase_Admin = document.getElementById("AgregandoClase_Admin");
const ModificandoClase_Admin = document.getElementById("ModificandoClase_Admin");
const RemoviendoClase_Admin = document.getElementById("RemoviendoClase_Admin");

const NM_Usuario = document.getElementById("NM_Usuario");
const CDG_Usuario = document.getElementById("CDG_Usuario");
const Rzn_Apelacion = document.getElementById("Razon_Apelacion");

const R_NOMBRE_Usuario = document.getElementById("R_NOMBRE_Usuario");
const R_APELLIDO_Usuario = document.getElementById("R_APELLIDO_Usuario");
const R_EDAD_Usuario = document.getElementById("R_EDAD_Usuario");
const R_GENERO_Usuario = document.getElementById("R_GENERO_Usuario");
const R_EMAIL_Usuario = document.getElementById("R_EMAIL_Usuario");
const R_CODIGO_Usuario = document.getElementById("R_CODIGO_Usuario");
const R_ROL_Usuario = document.getElementById("R_ROL_Usuario");

const SeleccionarClase_EstudiantePresente = document.getElementById("SeleccionarClase_EstudiantePresente");
const SeleccionarClase_EstudianteApelacion = document.getElementById("SeleccionarClase_EstudianteApelacion");

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

const SeleccionarOpcion_SesionActiva = document.getElementById("SeleccionarOpcion_SesionActiva");

const OpcionesSesion_Activa = document.getElementById("OpcionesSesion_Activa");

import {MostrarSeccion as MSeccion, Registrar_Usuario} from './Secciones.js'
import {MostrarInicioSesionUsuario as ComprobarUsuarioRegistrado} from './InicioDeSesion.js'
import {Registrando_Usuario as Reg_Usuario} from './Registrarse.js'
import {Boton_Confirmar_Usuario as BConfirmarUsuario} from './Autentificacion.js'

import {MarcarPresente as MPresente_ALM, EnviarApelacion as EApelacion_ALM} from './Estudiante_funciones.js'
import {Mostrar_Apelaciones as M_Apelaciones} from './Docente_Funciones.js'
import {RegistrarDocente_Admin as RegDocente_Admin, AsignandoDocente_Admin as AsDocente_Admin, DocenteModificar_Admin as DModificar_Admin, EliminandoDocente_Admin as EDocente_Admin, 
    AgregandoClase_Admin as AGRClase_Admin, ModificandoClase_Admin as ModClase_Admin, RemoviendoClase_Admin as RClase_Admin} from './Admin_Funciones.js'
import {CargarClases as CClases, CargarDocentes as CDocentes} from './cargadores.js'

import {CargarEstudiantesDocente as CEstudiantes_Docente} from './Docente_Funciones.js'

import {SeleccionarOpcion_SesionActiva as SOpcion_SesionActiva} from './SesionActual_Funciones.js'

MS_MostrarInicioSesionUsuario.addEventListener("click", () => {
    ComprobarUsuarioRegistrado();
});

MS_MostrarRegistro.addEventListener("click", () => {
    MSeccion(Registrar_Usuario);
});

Boton_Confirmar_Usuario.addEventListener("click", () => {
    BConfirmarUsuario(NM_Usuario,CDG_Usuario, Rzn_Apelacion);
});

Boton_Confirmar_Registro.addEventListener("click", () => {
    Reg_Usuario(R_NOMBRE_Usuario, R_APELLIDO_Usuario, R_EDAD_Usuario, R_GENERO_Usuario, R_EMAIL_Usuario, R_CODIGO_Usuario, R_ROL_Usuario);
});

MS_Boton_MarcarPresente_Estudiante.addEventListener("click", () => {
    CClases(SeleccionarClase_EstudiantePresente);
    MSeccion(Clases_EstudiantePresente);
});

MS_Boton_MandarApelacion_Estudiante.addEventListener("click", () => {
    CClases(SeleccionarClase_EstudianteApelacion);
    MSeccion(Apelacion_Estudiante);
});

Boton_MarcarPresente.addEventListener("click", () => {
    MPresente_ALM();
});

Boton_EnviarApelacion.addEventListener("click", () => {
    EApelacion_ALM(SeleccionarClase_EstudianteApelacion, Rzn_Apelacion);
});

MS_Boton_AdministrarEstudiantes.addEventListener("click", () => {
    CEstudiantes_Docente();
    MSeccion(AdministrarEstudiantes_Docente);
});

MS_Boton_RevisarApelaciones.addEventListener("click", () => {
    MSeccion(VerApelaciones_Docente);
});

VerApelaciones_Docente.addEventListener("click", () =>{
    M_Apelaciones();
});

MS_Boton_AdministrarDocentes.addEventListener("click", () => {
    MSeccion(AdministrarDocentes);
});

MS_Opcion_AñadirDocente.addEventListener("click", () => {
    MSeccion(AñadirDocente_Admin);
});

MS_Opcion_AsignarDocente.addEventListener("click", () => {
    CClases(SeleccionarClase_Docente);
    MSeccion(AsignarDocente_Admin);
})

MS_Opcion_ModificarDocente.addEventListener("click", () => {
    MSeccion(ModificarDocente_Admin);
})

MS_Opcion_EliminarDocente.addEventListener("click", () => {
    MSeccion(EliminarDocente_Admin);
})

RegistrarDocente_Admin.addEventListener("click", () => {
    RegDocente_Admin(AñadirDocente_Nombre, AñadirDocente_Apellido, AñadirDocente_Edad, AñadirDocente_Genero, AñadirDocente_Email, AñadirDocente_Codigo);
});

AsignandoDocente_Admin.addEventListener("click", () => {
    AsDocente_Admin(SeleccionarClase_Docente, AsignarDocente_ID);
});

DocenteModificar_Admin.addEventListener("click", () => {
    DModificar_Admin(EncontrarDocente_ID, Nuevo_DocenteNombre, Nuevo_DocenteApellido, Nuevo_DocenteEdad, Nuevo_DocenteGenero, Nuevo_DocenteEmail, Nuevo_DocenteCodigo);
});

EliminandoDocente_Admin.addEventListener("click", () => {
    EDocente_Admin(IDdocente_Eliminar);
});

MS_Boton_AdministrarClases.addEventListener("click", () => {
    MSeccion(AdministrarClases);
});

MS_Opcion_AñadirClase.addEventListener("click", () => {
    MSeccion(AgregarClase_Admin);
    CDocentes(SeleccionarDocente_Clase);
});

MS_Opcion_ModificarClase.addEventListener("click", () => {
    MSeccion(ModificarClase_Admin);
    CDocentes(SeleccionarNuevoDocente_Clase);
});

MS_Opcion_RemoverClase.addEventListener("click", () => {
    MSeccion(RemoverClase_Admin);
});

AgregandoClase_Admin.addEventListener("click", () => {
    AGRClase_Admin(AgregarNombre_Clase, AgregarCiclo_Clase);
});

ModificandoClase_Admin.addEventListener("click", () => {
    ModClase_Admin(ID_ClaseBuscar, NuevoID_Clase, NuevaMateria_Clase, NuevoCiclo_Clase);
});

RemoviendoClase_Admin.addEventListener("click", () => {
    RClase_Admin(IDClase_Remover);
});


SeleccionarOpcion_SesionActiva.addEventListener("click", () => {
    SOpcion_SesionActiva(OpcionesSesion_Activa);
});
